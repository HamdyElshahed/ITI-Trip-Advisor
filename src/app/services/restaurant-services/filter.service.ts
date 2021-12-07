import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QueryDocumentSnapshot } from '@angular/fire/compat/firestore';
import { getDocs, query, QuerySnapshot, where } from '@firebase/firestore';
import { Observable, Subject } from 'rxjs';
import { Dish, Location, Restaurant } from 'src/app/models/restaurant.model';
import { environment, setLocation } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

/**
 * for more information on how to connect to firebase please go to :
 * https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md
 */
export class FilterService {
  locatoion: Location;
  filterUpdated:Subject<Restaurant[]>;
  private itemsCollection: AngularFirestoreCollection<Restaurant>;

  filteredRestaurantsList: Restaurant[];
  allRestaurantList!: Observable<Restaurant[]>;//for filter items to set list values

  constructor(private firestore: AngularFirestore) {
    this.filterUpdated=new Subject();
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


  /**
   * update the filteredRestaurantList array that will be updated each time the user selected a new check box
   * finally it will be sent to the restaurants component to render the UI with the new Data
   */
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

      this.filterUpdated.next(this.filteredRestaurantsList);
    }


  }

  /**
   * gets a list of restaurants filtered by featureName
   * @param featureName feature name
   * @returns a list of restaurants filtered by featureName
   */
  queryForFeatures(featureName: string): Observable<Restaurant[]> {
    return this.firestore.collection<Restaurant>('restaurant', ref => ref.where('features', "array-contains", featureName)).valueChanges();

  }

/**
 * used to intialize the allRestaurantList member variable
 * @returns All the restaurants based on the current location
 */
 getRestaurants(): Observable<Restaurant[]> {

    let res: Restaurant[] = []
    return new Observable((observer) => {
      this.firestore.collection<Restaurant>('restaurant').ref.where("location.city", "==", this.locatoion.city)
        .get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            res.push(doc.data());
            //this.filterService.updateRestaurantList(querySnapshot);
          });
          observer.next(res)
        })
    });
  }

  /**
   * Query for category by category name
   *
   * @param categName category name
   * @returns a list of restaurant that have the same categorry
   */
  queryForCategory(categName: string): Observable<Restaurant[]> {
    const categAlias = categName.charAt(0).toLowerCase() + categName.slice(1);
    console.log(categAlias);
    return this.firestore.collection<Restaurant>('restaurant', ref =>

      ref.where('categories',
        "array-contains", {
        "alias": categAlias,
        "title": categName
      })).valueChanges();

  }
  /**
   * get all the restaurants in the provided city to fill the filter item of Neighborhood
   *
   * @param propValue represernt the value of City property of location obj
   * @param prop represent City key
   * @returns Observable Array of restaurants
   */
  queryForNeighborhoods(propValue: string, prop: string): Observable<Restaurant[]> {
    console.log(propValue);
    return this.firestore.collection<Restaurant>('restaurant', ref => ref.where("location." + prop, "==", propValue)).valueChanges();

  }

  /**
   * get all the restaurants that close to the provided address
   *
   * @param propValue represernt the value of address1 property of location obj
   * @param prop represent address1 key
   * @returns Observable Array of restaurants
   */
  queryForNeighborhoodOf(propValue: string, prop: string): Observable<Restaurant[]> {
    let res: Restaurant[] = []
    return new Observable((observer) => {
      this.firestore.collection<Restaurant>('restaurant').ref.where("location.city", "==", this.locatoion.city)
      .where("location." + prop, "==", propValue)
        .get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            res.push(doc.data());
            console.log(doc.id, " => ", doc.data());
          });
          observer.next(res)
        })
    });
  }

  getTopRatedRestaurants(): Observable<Restaurant[]> {
    return this.firestore.collection<Restaurant>('restaurant', ref => ref.where('rating', ">=", 4)).valueChanges();

  }
  getRestaurantById(id:string): Observable<Restaurant[]> {
    return this.firestore.collection<Restaurant>('restaurant', ref => ref.where('id', "==", id)).valueChanges();

  }
  getMenuById(id:string): Observable<Dish[]> {
    return this.firestore.collection<Dish>(`restaurant/${'6Ru17rNfe0vKHRGuIwR5'}/menu`).valueChanges();

  }
}
