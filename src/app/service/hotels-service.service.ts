import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class HotelsServiceService {
  constructor(private fs: AngularFirestore) {}

  getallhotels() {
    return this.fs.collection('hotels').valueChanges();
  }

  getallplaces() {
    return this.fs.collection('places').valueChanges();
  }
}
