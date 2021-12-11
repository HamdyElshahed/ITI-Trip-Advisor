import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'TripAdvisor';
  constructor(private spinner: NgxSpinnerService , private translate: TranslateService) {}
  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000);

    this.setTranslate();
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
}

