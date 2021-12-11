import { HotelsServiceService } from 'src/app/service/hotels-service.service';
import { hotels } from './../../models/hotels.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
