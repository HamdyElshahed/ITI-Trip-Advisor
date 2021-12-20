import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { doc, updateDoc, arrayUnion, arrayRemove } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userId! : User
  userData! : User
  constructor(
    private angularfirestore : AngularFirestore ,
    private angularfireauth : AngularFireAuth ,
    private router : Router,
  ) {
  }

  async getUserData(){
   this.userId= JSON.parse(`${localStorage.getItem('user')}`);
    console.log(this.userId);
    return await this.angularfirestore.doc(`Users/${this.userId.uid}`).valueChanges()
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
  async deleteFavorites(favoriteId : any ,){
  //   this.userId= JSON.parse(`${localStorage.getItem('user')}`);
    let userdata = this.angularfirestore.firestore.doc(`Users/${this.userId.uid}`);
  //   await updateDoc(data, {
  //    favorites: arrayRemove({uid: `${favoriteId}`})
  //  });
  let removearr ;
  // (await this.getUserData()).subscribe(async (data : any) =>{
  //   let fav = await data.favorites;
  //   console.log(fav)
  //   console.log(favoriteId)
  //   removearr = fav.filter((f : any)=>{
  //     console.log(f.uid)
  //     return  favoriteId !== f.uid
  //   })
  //   console.log(removearr);
    await updateDoc(userdata, {
      // favorites: removearr
      favorites: arrayRemove({uid: `${favoriteId}`})
    });
  // })
   console.log('remove')
  }

  async updateReservations(reservData : any , category : any){
    this.userId= JSON.parse(`${localStorage.getItem('user')}`);
    let data = this.angularfirestore.firestore.doc(`Users/${this.userId.uid}`);
    await updateDoc(data, {
      reservations: arrayUnion({ category : category ,  reserv: reservData})
   });
  }
  async updateResentlyView(viewId : any , category : any){
    this.userId= JSON.parse(`${localStorage.getItem('user')}`);
    let data = this.angularfirestore.firestore.doc(`Users/${this.userId.uid}`);
    await updateDoc(data, {
      resentlyview: arrayUnion({ category : category ,  views: viewId})
   });
  }
}
