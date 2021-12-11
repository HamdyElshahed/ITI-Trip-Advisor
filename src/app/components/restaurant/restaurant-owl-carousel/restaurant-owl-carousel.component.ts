import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Restaurant } from 'src/app/models/restaurant.model';
import { FilterService } from 'src/app/services/restaurant-services/filter.service';

@Component({
  selector: 'app-restaurant-owl-carousel',
  templateUrl: './restaurant-owl-carousel.component.html',
  styleUrls: ['./restaurant-owl-carousel.component.scss']
})
export class RestaurantOwlCarouselComponent implements OnInit {
  @Input() filterByFeatur!:string;
  @Input() restaurantsList!:Restaurant[];
  constructor(private filterService:FilterService) { }

  ngOnInit(): void {

  }


 customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 600,
  nav: true,
  navText: ['&#8249', '&#8250;'],
   responsive: {
    0: {
      items: 2,

  },
  600: {
      items: 3,

  },
  800: {
      items: 4,

  },
  1000: {
      items: 5,
  }
   },
  margin:5
 }

}


