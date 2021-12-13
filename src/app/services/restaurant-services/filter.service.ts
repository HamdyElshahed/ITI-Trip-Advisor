import { Time } from '@angular/common';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { collection, getDocs, query, QueryDocumentSnapshot, QuerySnapshot, where } from '@firebase/firestore';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { Observable, Subject } from 'rxjs';
import { Dish, Location, OpenTime, Restaurant, Table } from 'src/app/models/restaurant.model';
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
  filterUpdated: Subject<Restaurant[]>;
  private itemsCollection: AngularFirestoreCollection<Restaurant>;

  filteredRestaurantsList: Restaurant[];
  allRestaurantList!: Observable<Restaurant[]>;//for filter items to set list values

  constructor(private firestore: AngularFirestore) {
    this.filterUpdated = new Subject();
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
    return this.firestore.collection<Restaurant>('restaurant', ref => ref.where('rating', ">=", 4).limit(10)).valueChanges();

  }

  async getFirstPage():Promise<QuerySnapshot<Restaurant>>{
    const first = query(this.firestore.collection<Restaurant>('restaurant').ref.orderBy("rating").limit(7));
    return await getDocs(first);
  }

  async getNextPage(current:QueryDocumentSnapshot<Restaurant>):Promise<QuerySnapshot<Restaurant>>{
    const next = query(this.firestore.collection<Restaurant>('restaurant').ref
    .orderBy("rating").
      startAfter(current).
      limit(7));
      return await getDocs(next)
  }
  async getPrevPage(current:QueryDocumentSnapshot<Restaurant>):Promise<QuerySnapshot<Restaurant>>{
    const next = query(this.firestore.collection<Restaurant>('restaurant').ref
    .orderBy("rating",'desc').
      startAfter(current).
      limit(7));
      return await getDocs(next)
  }

  // async getTopRatedRestaurants2(): Observable<Restaurant[]> {

  //   // Query the first page of docs
  //   const first = query(this.firestore.collection<Restaurant>('restaurant').ref.orderBy("rating").limit(7));
  //   const documentSnapshots = await getDocs(first);
  //   documentSnapshots.docs.forEach(val=>{
  //     val.data();
  //   })
  //   // Get the last visible document
  //   const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
  //   console.log("last", lastVisible);

  //   // Construct a new query starting at this document,
  //   // get the next 25 cities.
  //   const next = query(this.firestore.collection<Restaurant>('restaurant').ref
  //   .orderBy("rating").
  //     startAfter(lastVisible).
  //     limit(7));

  //   // return this.firestore.collection<Restaurant>('restaurant', ref => ref.where('rating', ">=", 4).limit(10)).valueChanges();

  // }
  getRestaurantById(id: string): Observable<Restaurant[]> {
    return this.firestore.collection<Restaurant>('restaurant', ref => ref.where('id', "==", id)).valueChanges();

  }
  getMenuList(restaurantId: string): Observable<Dish[]> {
    return this.firestore.collection<Dish>(`restaurant/${restaurantId}/menu`).valueChanges();
  }

  addNewDish(restaurantId: string, dish: Dish) {
    // let id=this.itemsCollection.doc().ref.id;
    const id = this.firestore.createId();
    console.log(id);
    dish.id = id;
    this.firestore.collection<Dish>(`restaurant/${restaurantId}/menu`).doc(id).set(dish);
    console.log(dish);
  }
  /**
   *
   * @param restaurantId represent the current restaurant id
   * @param day represent the day of the week number for example sunday =0 monday=1 ...etc
   * @param time time object from ... to in 24 hours format
   */
  addOpenTime(restaurantId: string, day: string, time: OpenTime) {

    this.firestore.collection<OpenTime>(`restaurant/${restaurantId}/hours`).doc(day).set(time);
    console.log(time);
  }

  getTablesList(restaurantId: string): Observable<Table[]> {
    return this.firestore.collection<Table>(`restaurant/${restaurantId}/Available_Tables`).valueChanges();
  }

  getAvailableTables(restaurantId: string): Observable<Table[]> {
    return this.firestore.collection<Table>(`restaurant/${restaurantId}/Available_Tables`, ref => ref.where('available', "==", true)).valueChanges();
  }


  getRestaurantOpenTimeAt(restaurantId: string, day: string): Observable<any> {

    return this.firestore.collection<OpenTime>(`restaurant`).doc(restaurantId).collection<OpenTime>('hours').doc(day).get();
  }


}
