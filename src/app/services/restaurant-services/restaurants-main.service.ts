import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsMainServiceService {
  private itemsCollection: AngularFirestoreCollection<Restaurant>;

  constructor(private firestore: AngularFirestore) {
    this.itemsCollection = firestore.collection<Restaurant>('restaurant');
  }

  addItem(item: Restaurant) {
    // let id=this.itemsCollection.doc().ref.id;
    const id = this.firestore.createId();
    console.log(id);
    item.id = id;
    this.itemsCollection.doc(id).set(item);
    console.log(item);
  }

  addMultipleRestaurant(restaurants:Restaurant[]){
    restaurants.forEach((val)=>{
      this.addItem(val);
    })
  }


}
