import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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
 showCarousel:boolean;

 restaurants!:Restaurant[];
 constructor(private restaurantService:RestaurantsMainServiceService,
  private filterService:FilterService,translate:TranslateService) {
  this.filterBy= ["Features","Neighborhoods","Categories",];
  this.filterByCommonFeatur= ["Delivery","Outdoor Seating","Reservations","Dinner","Good for Groups"];
  this.showCarousel=true;
 }

  ngOnInit(): void {
    this.filterService.getRestaurants().subscribe((val)=>{
      this.restaurants=val;

    });

    this.filterService.filterUpdated.subscribe(val=>{
      this.restaurants=val;
      this.showCarousel=false;
    })
  }



  addRestaurant(restaurant:Restaurant){
    this.restaurantService.addItem(restaurant);
  }

  addMultipleRestaurants(){
    this.restaurantService.addMultipleRestaurant(ALLRESTAURANTS);
  }

}
