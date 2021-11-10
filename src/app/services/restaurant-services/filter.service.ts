import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/models/restaurant.model';

@Injectable({
  providedIn: 'root'
})

/**
 * for more information on how to connect to firebase please go to :
 * https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md
 */
export class FilterService {

  filteredRestaurantsList:Restaurant[];
  allRestaurantList!:Observable<Restaurant[]>;
  constructor(private firestore: AngularFirestore) {
     this.filteredRestaurantsList=[];
     this.allRestaurantList=this.getRestaurants()
  }

  updateRestaurantList(restaurantArr:Restaurant[]){

    if (restaurantArr.length!==0) {
      this.filteredRestaurantsList=[...restaurantArr];

    const arrayUniqueByKey = [...new Map(this.filteredRestaurantsList.map(item =>
      [item['id'], item])).values()];
    this.filteredRestaurantsList=[...arrayUniqueByKey];
    console.log("filteredRestaurantList updated");
    console.log(this.filteredRestaurantsList);
    }
    
    
  }

  queryForFeatures(featureName:string):Observable<Restaurant[]>{
   return this.firestore.collection<Restaurant>('restaurant', ref => ref. where('features', "array-contains", featureName)).valueChanges();
  
  }


  getRestaurants():Observable<Restaurant[]>{
    
   return this.firestore.collection<Restaurant>('restaurant').valueChanges();;
  
  }
  queryForCategory(categName:string):Observable<Restaurant[]>{
   return this.firestore.collection<Restaurant>('restaurant', ref => ref. where('categories.title', "==", categName)).valueChanges();
  
  }
  queryForNeighborhoods(city:string):Observable<Restaurant[]>{
   return this.firestore.collection<Restaurant>('restaurant', ref => ref. where('location.city', "==", city)).valueChanges();
  
  }
}
