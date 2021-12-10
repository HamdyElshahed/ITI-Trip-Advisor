import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private angularfirestore : AngularFirestore) { }
  async getCollection(collection :any ) {
    return await  this.angularfirestore.collection(collection).valueChanges();
  }

  async querySearchTopRate(collection :any , ratekey : string , rateval : number) {
    return await  this.angularfirestore.collection(collection, ref=>ref.where(ratekey ,'>=' , rateval)).valueChanges();
  }
}
