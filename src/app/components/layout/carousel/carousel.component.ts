import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() carousel! : string ;
  arr : number[] = [0,0,0,0,0];
  constructor() { }

  ngOnInit(): void {
  }

  customOptionscarousel1: OwlOptions = {
    nav: true,
    margin: 30,
    navText: ['&#8249', '&#8250;'],
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: true
      },
      800: {
        items: 3,
        nav: true
      },
      1000: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  };

  customOptionscarousel2: OwlOptions = {
    nav: true,
    margin: 20,
    navText: ['&#8249', '&#8250;'],
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: true
      },
      800: {
        items: 3,
        nav: true
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  };


}
