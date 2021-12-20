import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'TripAdvisor';
  dir = 'ltr';
  constructor(private spinner: NgxSpinnerService , private translate: TranslateService) {}
  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 3500);

    this.setTranslate();
    localStorage.setItem('lang' , 'en');

    this.translate.onLangChange.subscribe((lg)=>{
      if (lg.lang === 'ar') {
        this.dir = 'rtl'
      }else {this.dir = 'ltr'}

    })

  }
  setTranslate() {
    let lang = localStorage.getItem('currentlang');
    if (!lang || lang == 'en') {
      this.translate.setDefaultLang('en');
      if (!lang) localStorage.setItem('currentlang', 'en');
    } else {
      this.translate.setDefaultLang(lang);
    }
  }

 customOptions: OwlOptions = {
   loop: true,
   mouseDrag: false,
   touchDrag: false,
   pullDrag: false,
   dots: false,
   navSpeed: 600,
   navText: ['&#8249', '&#8250;'],
   responsive: {
     0: {
       items: 1
     },
     400: {
       items: 2
     },
     760: {
       items: 3
     },
     1000: {
       items: 4
     }
   },
   nav: true
 }
}

