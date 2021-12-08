import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ALLRESTAURANTS, Dish, Restaurant } from 'src/app/models/restaurant.model';
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
  dishesList!:Dish[];

  constructor(private activatedRoute: ActivatedRoute, private filterService: FilterService, private mainService: RestaurantsMainServiceService) { }

  images: string[] = [];
  currentRate!:number;
  ngOnInit(): void {
    this.restaurantId = this.activatedRoute.snapshot.params.id;
    this.filterService.getRestaurantById(this.restaurantId).subscribe(val => {
      this.restaurant = val[0];
      console.log(this.restaurant.name);
      this.currentRate=this.restaurant.rating?this.restaurant.rating:0;
    })

    //get menu
      this.filterService.getMenuById(this.restaurantId).subscribe(val=>{
      this.dishesList=val;
      console.log(this.dishesList);
    });

  }



  addNewDish(dish:Dish){
    console.log(dish);
   this.filterService.addNewDish(this.restaurantId,dish);
  }




}
