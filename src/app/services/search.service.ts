import { EventEmitter, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor( private router: Router , private angularfirestore : AngularFirestore) { }

  setsearch(searchvalue : string) {
    this.router.navigateByUrl(`search?searchkey=${searchvalue}`)
    console.log(searchvalue);
  }
  async querySearchByDocId( collection : string , uid : string ){
    return await  this.angularfirestore.doc(`${collection}/${uid}`).valueChanges();
  }

  querySearchByName(searchval : string , index :any) {
     return  this.angularfirestore.collection(index, ref=>ref.where('name' ,'==' , searchval)).valueChanges();
  }
  querySearchCollection(searchval : string) {
    return this.angularfirestore.collection(searchval).valueChanges();

  }
}
