import { hotels } from './../models/hotels.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class HotelsServiceService {
  constructor(private fs: AngularFirestore) {}

  getallhotels() {
    return this.fs.collection('hotels').valueChanges({ idField: 'Id' });
  }

  getallplaces() {
    return this.fs.collection('places').valueChanges();
  }

  gethotelById(Id: string) {
    return this.fs.collection('hotels').doc(`${Id}`).valueChanges();
  }
}
