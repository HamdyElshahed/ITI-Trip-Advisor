import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  favNo:number=0;
  lang=localStorage.getItem('currentlang');
  constructor( public authservice: AuthService ,
    public searchservice: SearchService ,
    private profileservice : ProfileService ,
    private angularfireauth : AngularFireAuth,
    private router: Router,
    private translate:TranslateService
    ) { }
  userData: any;
  async ngOnInit(): Promise<void> {
    let user = JSON.parse(`${localStorage.getItem('user')}`);
    if (user !== null) {
      (await this.profileservice.getUserData()).subscribe((user=>{
        this.userData = user;
      }))
    }
    this.profileservice.userDataObs.subscribe(val => {
      this.favNo=val.favorites.length
    })
  }

  setsearch(form : NgForm){
    console.log(form)
    this.searchservice.setsearch(form.value.searchval)
  }

  async getdata(){
    (await this.profileservice.getUserData()).subscribe((user=>{
      this.userData =user;
    }))
  }

  changeLang(){
    let lang=localStorage.getItem('currentlang');
    console.log('current',lang);
    if (lang=='en') {
    localStorage.setItem('currentlang','ar');
    this.translate.use('ar')

    }else{
      localStorage.setItem('currentlang','en');
      this.translate.use('en')    }

  }
}
