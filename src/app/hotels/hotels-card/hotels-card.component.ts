import { hotels } from './../../models/hotels.model';
import { Component, OnInit } from '@angular/core';
import { HotelsServiceService } from 'src/app/service/hotels-service.service';
@Component({
  selector: 'app-hotels-card',
  templateUrl: './hotels-card.component.html',
  styleUrls: ['./hotels-card.component.scss'],
})
export class HotelsCardComponent implements OnInit {
  hotels: hotels[] = [];
  Id: string[] = [];
  constructor(private hs: HotelsServiceService) {}

  ngOnInit(): void {
    this.getallhotels();
  }
  getallhotels() {
    this.hs.getallhotels().subscribe((res: any) => {
      this.hotels = res;
      for (let i = 0; i < res.length; i++) {
        this.Id.push(res[i].Id);
      }
      console.log(res.length);
      console.log(this.Id);
      console.log(res[0].Id);
    });
  }
}
