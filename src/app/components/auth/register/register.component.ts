import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor( private authservice: AuthService) { }

  ngOnInit(): void {
  }

  reg(form : any) {
    console.log(form)
    console.log(form.email , form.password , form.displayName , form.phoneNumber)
    this.authservice.Register(form.email , form.password , form.displayName , form.phoneNumber);
  }
}
