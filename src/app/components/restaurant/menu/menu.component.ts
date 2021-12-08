import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Dish } from 'src/app/models/restaurant.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
@Input()dishesList!:Dish[]
  constructor() { }

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
      items: 1,

  },
  600: {
      items: 2,

  },
  800: {
      items: 3,

  },
  1000: {
      items: 4,
  }
   },

 }

}
