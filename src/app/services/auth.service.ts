import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument  } from '@angular/fire/compat/firestore';
import { GoogleAuthProvider , FacebookAuthProvider } from "firebase/auth";
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  constructor
  (
     private angularfirestore : AngularFirestore ,
     private angularfireauth : AngularFireAuth ,
     private router : Router
  )
  {
      this.angularfireauth.onAuthStateChanged((user)=>{
        if(user){
          this.userData = user;
          localStorage.setItem('user' , JSON.stringify(this.userData));
          JSON.parse(`${localStorage.getItem('user')}`);
          console.log(JSON.parse(`${localStorage.getItem('user')}`))
        }else{
          localStorage.setItem('user' , `${null}`);
          JSON.parse(`${localStorage.getItem('user')}`);
          console.log(JSON.parse(`${localStorage.getItem('user')}`))
          this.angularfireauth.app.then((op)=>{
            console.log(op.options.valueOf())
          })
        }
      })
  }

  Register(email : string, password : string , name : string , phone : number){
    return this.angularfireauth.createUserWithEmailAndPassword(email,password)
      .then((res) => {
       console.log(res.user)
        this.SendVerifcationEmail()
        this.SetUserData(res.user);
        this.updateusername(name);
        console.log(`succ : ${res.user}`);
      }).catch((error)=>{ window.alert(error.message)})
  }
  async updateusername(name : string ){
   (await this.angularfireauth.currentUser)?.updateProfile({displayName:name})
  }

  async SendVerifcationEmail(){
    return (await this.angularfireauth.currentUser)?.sendEmailVerification()
      .then((res) => {this.router.navigateByUrl('verify-email')})
  }

  async SetUserData(user : any){
    const userRef : AngularFirestoreDocument = this.angularfirestore.doc(`Users/${user.uid}`);
    const userdata : User = {
      uid : user.uid,
      email : user.email,
      displayName : user.displayName,
      phoneNumber : user.phoneNumber,
      emailVerified : user.emailVerified
    }
    console.log(userdata)
    return userRef.set(userdata , {
      merge : true
    })
  }


 async Login(email : string, password : string ){
    return await this.angularfireauth.signInWithEmailAndPassword(email , password)
      .then((res) =>{
        console.log(res.user);
        this.SetUserData(res.user);
        this.router.navigateByUrl('/dashboard');
      }).catch((error) =>window.alert(error.message))
  }

  IsLoggedIn() : boolean {
    const user = JSON.parse(`${localStorage.getItem('user')}`);
      return (user !== null && user.emailVerified !== false)
  }

  ForgotPassword(resetpass : string){
    return this.angularfireauth.sendPasswordResetEmail(resetpass)
      .then(() =>{window.alert('Password reset email sent , check your inbox')})
      .catch((error) =>{ window.alert(error.message)})
  }

  SignOut(){
    return this.angularfireauth.signOut().then(() =>{
      localStorage.removeItem('user');
      this.router.navigateByUrl('login')
    })
  }

  GoogleAuth(){
    console.log('Google Auth')
    return this.GoogleAuthLogin(new GoogleAuthProvider())
  }

  async GoogleAuthLogin(provider : any){
    return await this.angularfireauth.signInWithPopup(provider)
      .then((res) =>{
        console.log(res.user);
        this.SetUserData(res.user);
        this.router.navigateByUrl('/dashboard')
      })
      .catch((error)=>{window.alert(error.message)})
  }

}
