import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant.model';
import { FilterService } from 'src/app/services/restaurant-services/filter.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {
  //get the restaurant id
  constructor(private activatedRoute: ActivatedRoute, private filterService: FilterService) { }
  restaurantId!: string;
  restaurant!: Restaurant;

  images: string[] = [];
  ngOnInit(): void {
    this.restaurantId = this.activatedRoute.snapshot.params.id;
    this.filterService.getRestaurantById(this.restaurantId).subscribe(val => {
      this.restaurant = val[0];
      console.log(this.restaurant.name);
    })

    fetch('https://api.unsplash.com/search/photos?client_id=T3JKH_umG7bg91Cj8cxuVH3YmCxDUbvWk-BfOVi1bJs&query=food')
      .then(response =>
        response.json()
      )
      .then(data => {
        for (let i = 0; i < 10; i++) {
          this.images.push(data['results'][i]['urls'].regular)
        }
        console.log(this.images);

      });

  }

}
