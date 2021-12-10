import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { HomeService } from 'src/app/services/home.service';
import { ProfileService } from 'src/app/services/profile.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 @ViewChild('select') category?: ElementRef;
 userData! : [];
 hotelsData!: [];
 restaurantData!: [];
 placesData!: [];
 topExplorer! : any;
  constructor(
     private router: Router ,
     public searchservice : SearchService  ,
     private profileservice : ProfileService ,
     private homeService : HomeService ,
     public authservice : AuthService
    ) { }

  async ngOnInit(): Promise<void> {
    let user = JSON.parse(`${localStorage.getItem('user')}`);
    if (user !== null) {
      (await this.profileservice.getUserData()).subscribe(async (user : any) => {
        this.userData = await user.recentlysearch;
        // for (let i = 0; i < this.userData.length; i++) {
        //   const element : any = this.userData[i];
        //   console.log(element);
        //   (await this.searchservice.querySearchByDocId(element.category, element.uid)).subscribe((ele : any)=>{

        //   })
        // }
      });
    }
    (await this.homeService.querySearchTopRate('hotels' , "rate" , 4)).subscribe( async (data : any)=>{
      console.log(data);
      this.hotelsData = await data;
      console.log(this.hotelsData)
    });
    (await this.homeService.querySearchTopRate("restaurant" , "rating" , 4)).subscribe((data : any)=>{
      this.restaurantData = data;
    });
    (await this.homeService.getCollection ("places")).subscribe((data : any)=>{
      this.placesData = data;
    });
    (await this.homeService.querySearchTopRate("hotels" , "rate" , 5)).subscribe((data : any)=>{
      this.topExplorer =data;
    });
    (await this.homeService.querySearchTopRate("restaurant" , "rating" , 5)).subscribe((data : any)=>{
      this.topExplorer.push(data[0])
    });
  }

  setsearch(form : NgForm){
    this.searchservice.setsearch(form.value.searchval)
  }


}
