import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Dish, Restaurant } from 'src/app/models/restaurant.model';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsMainServiceService {
  private itemsCollection: AngularFirestoreCollection<Restaurant>;
  user! : User
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

  randomIntFromInterval(min:number, max:number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  addNewRestaurantTemp(data:Restaurant){
    this.user= JSON.parse(`${localStorage.getItem('user')}`);
     console.log(this.user);
     const id = this.firestore.createId();
    data.id=id;

     return this.firestore.doc(`Users/${this.user.uid}`).collection('posts').doc(id).set(data);
   }

}
