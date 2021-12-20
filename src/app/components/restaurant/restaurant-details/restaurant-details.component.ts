import { Time } from '@angular/common';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { parseTranslation } from '@angular/localize/src/utils';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct, NgbModal, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { Observable, Subject } from 'rxjs';
import { ALLRESTAURANTS, Dish, OpenTime, Restaurant, Table } from 'src/app/models/restaurant.model';
import { ProfileService } from 'src/app/services/profile.service';
import { FilterService } from 'src/app/services/restaurant-services/filter.service';
import { RestaurantsMainServiceService } from 'src/app/services/restaurant-services/restaurants-main.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {
  //get the restaurant id
  restaurantId!: string;
  restaurant!: Restaurant;
  dishesList!: Dish[];
  availableTables: Promise<Table[]> | undefined;
  reservatioinPrice!:number;
  isClaimed:boolean=false;

  constructor(private activatedRoute: ActivatedRoute, private filterService: FilterService, private mainService: RestaurantsMainServiceService , private profileservice : ProfileService) { }

  images: string[] = [];
  currentRate!: number;
  ngOnInit(): void {
    this.restaurantId = this.activatedRoute.snapshot.params.id;
    this.filterService.getRestaurantById(this.restaurantId).subscribe(val => {
      this.restaurant = val[0];
      console.log(this.restaurant.name);
      this.isClaimed=this.restaurant.is_claimed?this.restaurant.is_claimed:false;
      console.log('is claimed ',this.isClaimed);
      this.currentRate = this.restaurant.rating ? this.restaurant.rating : 0;
    })

    //get menu
    this.filterService.getMenuList(this.restaurantId).subscribe(val => {
      this.dishesList = val;
      console.log(this.dishesList);
    });

    this.profileservice.updateResentlyView(this.restaurantId, 'restaurant')

  }
  addNewDish(dish: Dish) {
    console.log(dish);
    this.filterService.addNewDish(this.restaurantId, dish);
  }
  /**
   *
   * @param val an array that contain the data (as an array) recieved from reservation form that contains the date ,time and number of persones
   */
  findAvailableTables(val: [model: NgbDateStruct, time: NgbTimeStruct, personNo: number]) {
    let date = new Date(val[0].year, val[0].month, val[0].day, val[1].hour, val[1].minute); //conver the date to get the getDay() method wich return the day of the week no , where we stored in firestore
    console.log(new Date(date.getTime() + 7200000).toISOString().slice(11, -1)); // "03:25:45.000") amazing :)
    // console.log(date.toLocaleTimeString('en-US',{hour12:false}));

    let parsedTime = date.getTime() + 7200000;
    console.log(parsedTime);
    //create a query to check if the restaurant is opend in this day at the speciefied time and return the time
    //  this.filterService.isRestaurantOpenedAt(this.restaurantId,date.getDay().toString(),new NgbTime(val[1].hours,val[1].minutes))
    this.filterService.getRestaurantOpenTimeAt("6Ru17rNfe0vKHRGuIwR5", '0')
      .subscribe((time) => {

        console.log("if you see this that means query passed", time.data());
        //if the provided time between the range time of opening the restaurant
        if (parsedTime >= parseInt(time.data().start) && parsedTime <= parseInt(time.data().end)) {
          console.log("the restaurant is opened at the speciefied time", time.data());
          //then go and get the available tables
          this.filterService.getAvailableTables(this.restaurantId).subscribe(allTables => {
            let tables: Table[] = []

            this.availableTables = new Promise(resolve => {
              allTables.forEach((table, index, array) => {
                console.log(table);
                if (table.maxPersonsNo >= val[2]) {
                  tables.push(table)
                }
                if (index == array.length - 1) {//once the foreach finished emmit the value
                  resolve(tables)
                }
              })
            });
          })
        } else {
          console.log('no restaurant available in the speciefied time');
        }
      });
  }

  confirmReservation(price:number){
    this.reservatioinPrice=price;

  }



}
