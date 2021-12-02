import { hotels } from './../../models/hotels.model';
import { HotelsServiceService } from './../../service/hotels-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotels-details',
  templateUrl: './hotels-details.component.html',
  styleUrls: ['./hotels-details.component.scss'],
})
export class HotelsDetailsComponent implements OnInit {
  hotels: hotels[] | any = [];
  hotelId: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private HotelsServiceService: HotelsServiceService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res) => {
      if (res && res?.id) {
        this.hotelId = res.id;
      }
    });
    if (this.hotelId) {
      this.gethoteldetails();
    }
  }
  gethoteldetails() {
    this.HotelsServiceService.gethotelById(this.hotelId).subscribe((res) => {
      this.hotels.push(res);
    });
    console.log(this.hotels);
  }
}
