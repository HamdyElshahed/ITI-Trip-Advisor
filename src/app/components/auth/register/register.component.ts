import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor( private authservice: AuthService , private spinner :  NgxSpinnerService) { }
 user!: User;
 displayName! : string;
 email! : string;
 phoneNumber! : number;
 password! : string;
 reppassword! : string;
 check : any={
  checkname : false,
  checkemail : false,
  checkpass : false,
  checkphone : false,
  checkreppass : false,
 }
 terms : boolean = false;
 disabledbtn : boolean = true ;
 err : boolean=false;
 msg : string = '';
  ngOnInit(): void {
  }
  checkval(key: any) {
    const regusername = /^\s*\S+\s*$/
    const regemail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regphone = /^01[0-2,5]{1}[0-9]{8}$/
    const regpassword =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/;
    console.log(this.disabledbtn);
    switch (key.name) {
      case 'displayName':
        this.check.checkname =  regusername.test(this.displayName)
        break;
      case 'email':
        this.check.checkemail =  regemail.test(this.email)
        break;
      case 'phoneNumber':
        this.check.checkphone =  regphone.test(`${this.phoneNumber}`)
        break;
      case 'password':
        this.check.checkpass =  regpassword.test(`${this.password}`)
        break;
      case 'reppassword':
        this.check.checkreppass = (this.password === this.reppassword)?true:false;
       break;
      case 'terms':
        this.terms = !this.terms;
       break;
      default:
        break;
    }
    this.disabledbtn = !(this.check.checkname && this.check.checkemail && this.check.checkpass && this.check.checkreppass && this.terms) ;
  }
  register() {
    this.user={
      displayName:this.displayName,
      email :this.email,
      password :this.password,
      phoneNumber:this.phoneNumber,
    }
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
    }, 4000);
    this.authservice.Register(this.user)
    .then((res) => {
      console.log(res.user)
        this.authservice.SetUserDataRegister(res.user ,this.user.displayName, this.user.phoneNumber , true);
        this.authservice.SendVerifcationEmail();
       console.log(`succ : ${res.user}`);
     }).catch((error)=>{
      this.spinner.hide()
       this.msg= error.message;
       this.err = true;
      })
  }
}
