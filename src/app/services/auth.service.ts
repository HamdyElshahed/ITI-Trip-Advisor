import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument  } from '@angular/fire/compat/firestore';
import { GoogleAuthProvider , FacebookAuthProvider } from "firebase/auth";
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  loginDataUpdate : any;
  constructor
  (
     private angularfirestore : AngularFirestore ,
     private angularfireauth : AngularFireAuth ,
     private router : Router,
    private spinner :  NgxSpinnerService
  )
  {
      this.angularfireauth.authState.subscribe((user)=>{
        if(user){
          this.userData = user;
          localStorage.setItem('user' , JSON.stringify(this.userData));
          JSON.parse(`${localStorage.getItem('user')}`);
        }else{
          localStorage.setItem('user' , `${null}`);
          JSON.parse(`${localStorage.getItem('user')}`);
        }
      })
  }

  async Register(user :User){
    return await this.angularfireauth.createUserWithEmailAndPassword(user.email,user.password);
  }
  // async updateusername(name : string ){
  //   console.log('start');
  //  ( await this.angularfireauth. .currentUser)?. .updateProfile({displayName:name ,
  //     photoURL : 'https://firebasestorage.googleapis.com/v0/b/iti-trip-advisor.appspot.com/o/home%2Fprofile.jpg?alt=media&token=6c056796-3c9d-4148-a1d8-95a6d410d405'
  //   });
  //   console.log('finish');

  // }

  async SendVerifcationEmail(){
    return (await this.angularfireauth.currentUser)?.sendEmailVerification()
      .then((res) => {this.router.navigateByUrl('verify-email')})
  }

  async SetUserDataRegister(user : any ,name : any, phone : any , check : boolean ){
    const userRef : AngularFirestoreDocument = this.angularfirestore.doc(`Users/${user.uid}`);
    let userdata : any ;
    const userdatareg ={
      uid : user.uid,
      email : user.email,
      displayName : (user.displayName === null )?name : user.displayName ,
      phoneNumber : (user.phoneNumber === null )?phone : user.phoneNumber ,
      emailVerified : user.emailVerified,
      photoURL : 'https://firebasestorage.googleapis.com/v0/b/iti-trip-advisor.appspot.com/o/home%2Fprofile.jpg?alt=media&token=6c056796-3c9d-4148-a1d8-95a6d410d405'
    };
    const userdatalogin ={
      uid : user.uid,
      email : user.email,
      emailVerified : user.emailVerified,
    }
    userdata = (check) ?{...userdatareg}:{...userdatalogin}
    console.log(user);
    return await userRef.set(userdata , {
      merge : true
    })
  }

 async Login(user : User ){
    return await this.angularfireauth.signInWithEmailAndPassword(user.email , user.password)
  }

  get IsLoggedIn() : any {
    const user = JSON.parse(`${localStorage.getItem('user')}`);
      return ( user !== null && user.emailVerified !== false)?true : false;
  }

  ForgotPassword(resetpass : string){
    return this.angularfireauth.sendPasswordResetEmail(resetpass)
  }

  SignOut(){
    return this.angularfireauth.signOut().then(() =>{
      localStorage.removeItem('user');
      this.router.navigateByUrl('login')
    })
  }

  GoogleAuth(){
    return this.GoogleAuthLogin(new GoogleAuthProvider())
  }

  async GoogleAuthLogin(provider : any){
    return await this.angularfireauth.signInWithPopup(provider)
      .then((res) =>{
        console.log(res.user);
        this.SetUserDataRegister(res.user ,res.user?.displayName , null , true);
        this.router.navigateByUrl('/profile')
      })
      .catch((error)=>{window.alert(error.message)})
  }

  getuserdata(id : string ) : Observable<any>{
  //  let user = JSON.parse(`${localStorage.getItem('user')}`);
  //  this.angularfireauth.er?.uid
  //  })
    let data =  this.angularfirestore.doc(`Users/${id}`).valueChanges();
    console.log(data)
   return  data;
  }

}
