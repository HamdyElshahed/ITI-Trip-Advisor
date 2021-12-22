import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/models/user.model';
import { finalize } from 'rxjs/operators';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  arr : any = []= [1,2,3,4,5];
  userData! : User;
  userFavorites : [{}] | any=[{}];
  userReservations : [{}] | any=[{}] ;
  closeResult = '';
  constructor(public  authservice: AuthService ,
    private profileservice : ProfileService ,
    private modalService: NgbModal ,
    private angulargirestorage : AngularFireStorage,
    private searchservice: SearchService ,
     ) { }

  async ngOnInit(): Promise<void> {
    (await this.profileservice.getUserData()).subscribe(async (user :any) => {
      console.log(user);
      this.userData = await user;
      for (let i = 0; i < user.favorites.length; i++) {
        const element = await user.favorites[i];
        const stringuid = element.uid.toString();
        (await this.searchservice.querySearchByDocId('hotels' ,  stringuid)).subscribe(async(data:any)=>{
          console.log(data);
          if (data !== undefined) {
            this.userFavorites.push( await data);
            console.log(this.userFavorites);
          }
        });
        (await this.searchservice.querySearchByDocId('restaurant' ,  stringuid)).subscribe(async(data:any)=>{
          console.log(data);
          if (data !== undefined) {
            this.userFavorites.push( await data);
            // this.userFavorites.shift();
            console.log(this.userFavorites);
          }
        })

      }
      this.userFavorites.shift();
      for (let i = 0; i < user.reservations.length; i++) {
        const element = await user.reservations[i];
        const collection = element.category;
        const reserv = element.reserv;
        const Id = reserv.restaurantID || reserv.hotelId;
        (await this.searchservice.querySearchByDocId(collection ,  Id)).subscribe(async(data:any)=>{
          console.log(data);
          if (reserv !== undefined) {
            this.userReservations.push({category : collection , reserv :reserv , data : data});
            console.log(this.userReservations);
          }
        });
      }
      this.userReservations.shift();
    })
  // }
}
  open(content : any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  uploadcoverphoto(event : any , keyimg : any){
    let date = new Date();
    const img = event.files[0];
    const imgpath = `home/${this.userData.uid}/${date.getTime()}`;
    const task = this.angulargirestorage.upload(imgpath ,img);

    const fileref = this.angulargirestorage.ref(imgpath)
    const uploadpercentage = task.percentageChanges();
    let downloadurl ;
    let imgurl : any;
    task.snapshotChanges().pipe(
      finalize(() => {
        console.log(uploadpercentage)
        downloadurl=fileref.getDownloadURL()
        downloadurl.subscribe(url=>{
          imgurl =url;
          this.profileservice.UpdateUserData({ [keyimg]: imgurl})
        })

      })
    ).subscribe();

  }

  updateusername(val : any){
    console.log(val.value)
    this.profileservice.UpdateUserData({ displayName: val.value})
  }

}
