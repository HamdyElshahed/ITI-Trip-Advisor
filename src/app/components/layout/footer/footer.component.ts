import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private translateservice: TranslateService) { }

  ngOnInit(): void {
  }

  changeLang(event : any ){
    console.log(event.target.name);
    this.translateservice.use(event.target.name);
    localStorage.setItem('lang' , event.target.name);
  }
}
