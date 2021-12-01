import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() restaurant!:Restaurant;
currentRate!:number;

  constructor() { }

  ngOnInit(): void {
    this.currentRate=this.restaurant.rating?this.restaurant.rating:0;
  }

}
