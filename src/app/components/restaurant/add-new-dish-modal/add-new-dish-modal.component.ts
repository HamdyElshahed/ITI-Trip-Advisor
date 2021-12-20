import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { NgForm } from '@angular/forms';

import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Dish } from 'src/app/models/restaurant.model';
import { RestaurantsMainServiceService } from 'src/app/services/restaurant-services/restaurants-main.service';

@Component({
  selector: 'app-add-new-dish-modal',
  templateUrl: './add-new-dish-modal.component.html',
  styleUrls: ['./add-new-dish-modal.component.scss']
})
export class AddNewDishModalComponent implements OnInit {
  closeResult = '';
  uploadPercent!:number
  downloadURL!: Observable<string>;
  @Input() isClaimed:boolean;

  @Output() addNewMenuDish = new EventEmitter<Dish>();
  constructor(private modalService: NgbModal, private storage: AngularFireStorage,private mainService:RestaurantsMainServiceService,translate:TranslateService) { }
  ngOnInit(): void {

  }

  uploadFile(event: any) {

    const file = event.target.files[0];

    const filePath = `restaurant/${file.name}${this.mainService.randomIntFromInterval(1,5)}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes

      task.percentageChanges().subscribe(val =>{

        this.uploadPercent=val?val:0;
      })

    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() =>
      this.downloadURL = fileRef.getDownloadURL()
      )).subscribe()

  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content).result.then((result) => {
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

  addNewDish(modal: any, ngform: NgForm) {
    console.log("value");
    this.downloadURL.subscribe(val=>{ //wait the download url
      ngform.value.image_url=val;
       this.addNewMenuDish.emit(ngform.value);
       modal.close('Close click');
    })

  }

}
