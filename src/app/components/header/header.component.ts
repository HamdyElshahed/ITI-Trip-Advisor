import { LanguageServiseService } from './../../service/language-servise.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentLang: string;
  constructor(
    public Translate: TranslateService,
    private lang: LanguageServiseService
  ) {}

  changeCurrentLang(lang: string) {
    this.Translate.use(lang);
    localStorage.setItem('currentlang', lang);
  }
  change(btn: HTMLAnchorElement) {
    if (btn.innerHTML === 'English') {
      this.lang.langugeEvent.emit(true);
      btn.innerHTML = 'عربي';
      console.log(btn.innerHTML);
    } else if (btn.innerHTML === 'عربي') {
      this.lang.langugeEvent.emit(false);
      btn.innerHTML = 'English';
    }
  }

  ngOnInit(): void {
    this.currentLang = localStorage.getItem('currentlang')
      ? localStorage.getItem('currentlang')
      : 'en';
    this.listenChangeLan();
  }

  listenChangeLan() {
    this.Translate.onLangChange.subscribe((eventLan) => {
      console.log('evnt : ', eventLan);
      if (this.currentLang != eventLan.lang) {
        this.currentLang = eventLan.lang;
      }
    });
  }
}
