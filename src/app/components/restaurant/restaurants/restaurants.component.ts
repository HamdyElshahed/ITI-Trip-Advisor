import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant.model';
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
 constructor(private restaurantService:RestaurantsMainServiceService) { 
  this.filterBy= ["Features","Neighborhoods","Categories",];
  this.filterByCommonFeatur= ["Delivery","Outdoor Seating","Reservations","Dinner","Good for Groups"];
 }

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe((val)=>{
      this.restaurants=val;
      console.log(this.restaurantService);
    });
  }

}
