import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { doc, updateDoc, arrayUnion, arrayRemove } from "@angular/fire/firestore";
import { getDoc } from 'firebase/firestore';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userId! : User
  userData! : User
  userDataObs=new Observable<User>();
  constructor(
    private angularfirestore : AngularFirestore ,
    private angularfireauth : AngularFireAuth ,
    private router : Router,
  ) {
  }

  async getUserData(){
   this.userId= JSON.parse(`${localStorage.getItem('user')}`);
    // console.log(this.userId);
    this.userDataObs=await this.angularfirestore.doc<User>(`Users/${this.userId.uid}`).valueChanges()
    return this.userDataObs;
  }
  UpdateUserData(data:any){
   this.userId= JSON.parse(`${localStorage.getItem('user')}`);
    console.log(this.userId);
    return this.angularfirestore.doc(`Users/${this.userId.uid}`).set(data, {merge : true})
  }

  async updateRecentlySearch(searchdata : any , searchval : any , category : string){
    this.userId= JSON.parse(`${localStorage.getItem('user')}`);
    let data = this.angularfirestore.firestore.doc(`Users/${this.userId.uid}`);
    await updateDoc(data, {
     recentlysearch: arrayUnion({ keysearch : searchval , category : category ,  uid: `${searchdata[0].id}`})
   });
  }
  async updateFavorites(favoriteId : any ,){
    this.userId= JSON.parse(`${localStorage.getItem('user')}`);
    let data = this.angularfirestore.firestore.doc(`Users/${this.userId.uid}`);
    await updateDoc(data, {
     favorites: arrayUnion({uid: `${favoriteId}`})
   });
  }
  async deleteFavorites(favorites : any ,){
    this.userId= JSON.parse(`${localStorage.getItem('user')}`);
    let data = this.angularfirestore.firestore.doc(`Users/${this.userId.uid}`);
    await updateDoc(data, {
     favorites: favorites
   });
  }

  async updateReservations(reservData : any , category : any){
    this.userId= JSON.parse(`${localStorage.getItem('user')}`);
    let data = this.angularfirestore.firestore.doc(`Users/${this.userId.uid}`);
    await updateDoc(data, {
      reservations: arrayUnion({ category : category ,  reserv: reservData})
   });
  }
  async updateResentlyView(reservData : any , category : any){
    this.userId= JSON.parse(`${localStorage.getItem('user')}`);
    let data = this.angularfirestore.firestore.doc(`Users/${this.userId.uid}`);
    await updateDoc(data, {
      resentlyview: arrayUnion({ category : category ,  reserv: reservData})
   });
  }


}
