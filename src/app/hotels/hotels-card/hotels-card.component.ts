import { hotels } from './../../models/hotels.model';
import { Component, OnInit } from '@angular/core';
import {HotelsServiceService } from 'src/app/service/hotels-service.service'
@Component({
  selector: 'app-hotels-card',
  templateUrl: './hotels-card.component.html',
  styleUrls: ['./hotels-card.component.scss']
})
export class HotelsCardComponent implements OnInit {
hotels : hotels []=[];
  constructor(private HotelsServiceService : HotelsServiceService ) {
    this.hotels= this.HotelsServiceService.getallhotels();
   }

  ngOnInit(): void {
  }

}
