import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant.model';

@Component({
  selector: 'app-iconic-features-list',
  templateUrl: './iconic-features-list.component.html',
  styleUrls: ['./iconic-features-list.component.scss']
})
export class IconicFeaturesListComponent implements OnInit {
@Input() restaurant!:Restaurant
  constructor() { }

  ngOnInit(): void {
  }

}
