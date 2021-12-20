import { LanguageServiseService } from './../../service/language-servise.service';
import { hotels } from './../../models/hotels.model';
import { HotelsServiceService } from './../../service/hotels-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-hotels-details',
  templateUrl: './hotels-details.component.html',
  styleUrls: ['./hotels-details.component.scss'],
})
export class HotelsDetailsComponent implements OnInit {
  hotels: hotels[] | any = [];
  hotelId: string;
  langflag?: boolean;
  hoteldata : any ;
  constructor(
    private activatedRoute: ActivatedRoute,
    private HotelsServiceService: HotelsServiceService,
    private lang: LanguageServiseService ,
    private profileservice : ProfileService,
    public authservice : AuthService,
    private translate: TranslateService
  ) {
    this.lang.langugeEvent.subscribe((res) => {
      this.langflag = res;
      console.log(res);
    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res) => {
      if (res && res?.id) {
        this.hotelId = res.id;
        this.gethoteldetails();
        this.translate.onLangChange.subscribe((lg) => {
            this.hotels.About = this.hoteldata.Aboutar ;
            this.hotels.feature =  this.hoteldata.featurear ;
            this.hotels.review =  this.hoteldata.reviewar ;
        })
        this.profileservice.updateResentlyView(this.hotelId, 'hotels')
      }


    });

  }
  gethoteldetails() {
    this.HotelsServiceService.gethotelById(this.hotelId).subscribe((res :hotels | any) => {
      console.log(res);
      this.hoteldata = res;
      this.hotels = this.hoteldata;
      console.log(this.translate.getBrowserLang())
      let lang = localStorage.getItem('lang');
      console.log(lang);
      if (lang === 'ar') {
          this.hotels.About = this.hoteldata.Aboutar ;
           this.hotels.feature =  this.hoteldata.featurear ;
           this.hotels.review =  this.hoteldata.reviewar ;
      }
    });
    console.log(this.hotels);
  }
}
