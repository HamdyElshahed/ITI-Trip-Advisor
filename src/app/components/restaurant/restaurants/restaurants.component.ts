import { Component, OnInit } from '@angular/core';
import { Restaurant, ALLRESTAURANTS } from 'src/app/models/restaurant.model';
import { FilterService } from 'src/app/services/restaurant-services/filter.service';
import { RestaurantsMainServiceService } from 'src/app/services/restaurant-services/restaurants-main.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
 // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
 filterBy:string[];
 filterByCommonFeatur:string[];

 restaurants!:Restaurant[];
 constructor(private restaurantService:RestaurantsMainServiceService,private filterService:FilterService) { 
  this.filterBy= ["Features","Neighborhoods","Categories",];
  this.filterByCommonFeatur= ["Delivery","Outdoor Seating","Reservations","Dinner","Good for Groups"];
 }

  ngOnInit(): void {
    this.filterService.getRestaurants().subscribe((val)=>{
      this.restaurants=val;
      
    });

    this.filterService.filterUpdated.subscribe(val=>{
      this.restaurants=val;
    })
  }

  

  addRestaurant(restaurant:Restaurant){
    this.restaurantService.addItem(restaurant);
  }

  addMultipleRestaurants(){
    this.restaurantService.addMultipleRestaurant(ALLRESTAURANTS);
  }

}
 