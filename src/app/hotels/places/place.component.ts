import { place } from './../../models/place.model';
import { Component, OnInit } from '@angular/core';
import { HotelsServiceService } from 'src/app/service/hotels-service.service';
@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
})
export class PlaceComponent implements OnInit {
  places: place | any;

  constructor(private hs: HotelsServiceService) {}

  ngOnInit(): void {
    this.getallplaces();
    // console.log('alaa');
  }

  getallplaces() {
    this.hs.getallplaces().subscribe((res: any) => {
      this.places = res;
      // console.log(res);
    });
  }
}
