import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  status : boolean = false;
  msg : string = '';
  constructor( public authservice: AuthService , private spinner :  NgxSpinnerService) { }

  ngOnInit(): void {
  }
  resendemail(email :any){
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
    }, 3000);
    this.authservice.ForgotPassword(email)
    .then(() =>{
      this.msg= 'Password reset email sent , check your inbox';
      this.status = true;
    })
    .catch((error) =>{
      this.spinner.hide()
      this.msg= error.message.slice(10);
      this.status = true;
    })
  }
}
