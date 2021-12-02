import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant.model';
import { FilterService } from 'src/app/services/restaurant-services/filter.service';

@Component({
  selector: 'app-detailed-card-list',
  templateUrl: './detailed-card-list.component.html',
  styleUrls: ['./detailed-card-list.component.scss']
})
export class DetailedCardListComponent implements OnInit {
   topRestaurants!:Restaurant[];
  constructor(private filterService:FilterService) { }

  ngOnInit(): void {
    this.filterService.getTopRatedRestaurants().subscribe(val=>{
      this.topRestaurants=val;
      console.log('recieved top rated ',val);
    })
  }

}
