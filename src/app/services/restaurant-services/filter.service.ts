import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QueryDocumentSnapshot } from '@angular/fire/compat/firestore';
import { getDocs, query, QuerySnapshot, where } from '@firebase/firestore';
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
  locatoion: Location;
  private itemsCollection: AngularFirestoreCollection<Restaurant>;

  filteredRestaurantsList: Restaurant[];
  allRestaurantList!: Observable<Restaurant[]>;//for filter items to set list values

  constructor(private firestore: AngularFirestore) {

    // default location
    this.locatoion = {
      address1: "167 W 74th St",
      address2: "",
      address3: "",
      city: "New York",
      zip_code: "10023",
      country: "US",
      state: "NY",
      display_address: [
        "167 W 74th St",
        "New York, NY 10023"
      ]
    }
    this.filteredRestaurantsList = [];
    this.allRestaurantList = this.getRestaurants()

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

  updateRestaurantList(restaurantArr: Restaurant[]) {

    if (restaurantArr.length !== 0) {

      restaurantArr.forEach((val) => {
        this.filteredRestaurantsList.push(val);
      })
      //this.filteredRestaurantsList=[...restaurantArr];

      const arrayUniqueByKey = [...new Map(this.filteredRestaurantsList.map(item =>
        [item['id'], item])).values()];
      console.log(arrayUniqueByKey);
      this.filteredRestaurantsList.splice(0);
      arrayUniqueByKey.forEach((val) => {
        this.filteredRestaurantsList.push(val);
      })
      // this.filteredRestaurantsList=[...arrayUniqueByKey];
      console.log("filteredRestaurantList updated");
      console.log(this.filteredRestaurantsList);
    }


  }

  queryForFeatures(featureName: string): Observable<Restaurant[]> {
    return this.firestore.collection<Restaurant>('restaurant', ref => ref.where('features', "array-contains", featureName)).valueChanges();

  }
  queryForFeaturesComb() {

    this.firestore.collection('restaurant').ref.where("location.city", "==", this.locatoion.city)
      .where('features', "array-contains", 'Reservations')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

  }
  queryForFeaturesCombind(featureName: string):Observable<Restaurant[]>{

    let res:Restaurant[]=[]
     return new Observable((observer)=>{
       this.firestore.collection<Restaurant>('restaurant').ref.where("location.city", "==", this.locatoion.city)
     .where('features', "array-contains", featureName)
     .get().then((querySnapshot) => {
       querySnapshot.forEach((doc) => {
         res.push(doc.data());
         console.log(doc.id, " => ", doc.data());
         //this.filterService.updateRestaurantList(querySnapshot);
       });
     })
       observer.next(res)
     });
     

 }


  getRestaurants(): Observable<Restaurant[]> {

    return this.firestore.collection<Restaurant>('restaurant').valueChanges();

  }

  queryForCategory(categName: string): Observable<Restaurant[]> {
    return this.firestore.collection<Restaurant>('restaurant', ref => ref.where('categories.title', "==", categName)).valueChanges();

  }
  queryForNeighborhoods(propValue: string, prop: string): Observable<Restaurant[]> {
    return this.firestore.collection<Restaurant>('restaurant', ref => ref.where("location." + prop, "==", propValue)).valueChanges();

  }

}
