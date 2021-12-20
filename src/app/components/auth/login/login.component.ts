import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user!: User;
  email! : string;
  password! : string;
  checkemail : boolean= false;
  err : boolean = false;
  msg : string = '';
  constructor( public authservice: AuthService , private router: Router , private spinner :  NgxSpinnerService
    ) { }

  ngOnInit(): void {
  }
  checkval() {
    const regemail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    this.checkemail =  regemail.test(this.email)
  }

  login(){
    this.user = {
      email : this.email,
      password : this.password,
    }
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
      window.location.reload();
    }, 3000);
    this.authservice.Login(this.user)
    .then((res) =>{
      console.log(res.user);
      this.authservice.SetUserDataRegister(res.user ,res.user?.displayName , null , false);
      this.router.navigateByUrl('/');
    }).then(()=>{})
    .catch((error) =>{
      this.spinner.hide()
      this.msg= error.message.slice(10);
       this.err = true;
    })
  }

}
