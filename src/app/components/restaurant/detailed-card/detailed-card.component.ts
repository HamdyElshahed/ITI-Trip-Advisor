import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant.model';

@Component({
  selector: 'app-detailed-card',
  templateUrl: './detailed-card.component.html',
  styleUrls: ['./detailed-card.component.scss']
})
export class DetailedCardComponent implements OnInit {
@Input() restaurant!:Restaurant;
currentRate!:number;

  constructor() { }

  ngOnInit(): void {
    this.currentRate=this.restaurant.rating?this.restaurant.rating:0;
  }

}
