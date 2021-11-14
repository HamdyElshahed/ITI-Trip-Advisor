import { hotels } from './../models/hotels.model';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HotelsServiceService {
  hotels!: hotels[];

  constructor() {
    this.hotels = [
      {
        feature: ['free wifi', 'free pool'],
        id: 1,
        price: 1500,
        name: 'B&B de Pottenbakkershoeve',
        location: ['7.5 miles from America'],
        paymentmethod: ['visa', 'paymenton delivery'],
        imgUrl: [],
        reviewCount: 1112,
        rate: 4.5,
        phonenumber: +15554687,
      },
      {
        feature: ['free wifi', 'free pool'],
        id: 1,
        price: 1500,
        name: 'B&B de Pottenbakkershoeve',
        location: ['7.5 miles from America'],
        paymentmethod: ['visa', 'paymenton delivery'],
        imgUrl: [],
        reviewCount: 1112,
        rate: 4.5,
        phonenumber: +15554687,
      },
    ];
  }



getallhotels(): hotels[]{
return this.hotels.slice()
}


}

