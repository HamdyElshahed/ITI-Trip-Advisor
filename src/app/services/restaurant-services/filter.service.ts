import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QueryDocumentSnapshot} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Location, Restaurant } from 'src/app/models/restaurant.model';

@Injectable({
  providedIn: 'root'
})

/**
 * for more information on how to connect to firebase please go to :
 * https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md
 */
export class FilterService {
  locatoion:Location;
  private itemsCollection: AngularFirestoreCollection<Restaurant>;

  filteredRestaurantsList:Restaurant[];
  allRestaurantList!:Observable<Restaurant[]>;//for filter items to set list values

  constructor(private firestore: AngularFirestore) {

    // default location
    this.locatoion={
              state: "CA",
              address: "3373 Tates Creek Rd",
              city: "Cairo",
              country: "EG"
            }
     this.filteredRestaurantsList=[];
     this.allRestaurantList=this.getRestaurants()

     this.itemsCollection = firestore.collection<Restaurant>('restaurant');
  }


//temp function for adding new restaurant ,it will be moved later to its own component
  // addItem(item: Restaurant) {
  //   // let id=this.itemsCollection.doc().ref.id;
  //   const id = this.firestore.createId();
  //   console.log(id);
  //   item.id=id;
  //   this.itemsCollection.doc(id).set(item);
  // }

  updateRestaurantList(restaurantArr:Restaurant[]){

    if (restaurantArr.length!==0) { 
      
      restaurantArr.forEach((val)=>{
        this.filteredRestaurantsList.push(val);
      })
      //this.filteredRestaurantsList=[...restaurantArr];

    const arrayUniqueByKey = [...new Map(this.filteredRestaurantsList.map(item =>
      [item['id'], item])).values()];
      console.log(arrayUniqueByKey);
      this.filteredRestaurantsList.splice(0);
      arrayUniqueByKey.forEach((val)=>{
        this.filteredRestaurantsList.push(val);
      })
    // this.filteredRestaurantsList=[...arrayUniqueByKey];
    console.log("filteredRestaurantList updated");
    console.log(this.filteredRestaurantsList);
    }
    
    
  }

  queryForFeatures(featureName:string):Observable<Restaurant[]>{
   return this.firestore.collection<Restaurant>('restaurant', ref => ref. where('features', "array-contains", featureName)).valueChanges();
  
  }


  getRestaurants():Observable<Restaurant[]>{
    
   return this.firestore.collection<Restaurant>('restaurant').valueChanges();
  
  }

  queryForCategory(categName:string):Observable<Restaurant[]>{
   return this.firestore.collection<Restaurant>('restaurant', ref => ref. where('categories.title', "==", categName)).valueChanges();
  
  }
  queryForNeighborhoods(city:string,type:string):Observable<Restaurant[]>{
   return this.firestore.collection<Restaurant>('restaurant', ref => ref. where("location."+type, "==", city)).valueChanges();
  
  }
  
}
