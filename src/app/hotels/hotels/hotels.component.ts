import { HotelsServiceService } from 'src/app/service/hotels-service.service';
import { hotels } from './../../models/hotels.model';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent implements OnInit {
  currentPage: number = 0;
  noOpages: number[] = [];
  hotels: hotels[] = [];
  toBeViwehotels: hotels[] = [];
  // Id: string[] = [];
  pageSize = 5;
  constructor(
    private hs: HotelsServiceService,
    public Translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.getallhotels();
  }
  getallhotels() {
    this.hs.getallhotels().subscribe((res: any) => {
      this.hotels = res;
      // for (let i = 0; i < res.length; i++) {
      //   this.Id.push(res[i].Id);
      // }
      console.log(this.hotels);
      this.paging();
      this.sliceArray();
      console.log(res.length);
      console.log(res[0].Id);
    });
  }

  paging() {
    const numberOfPages = Math.ceil(this.hotels.length / this.pageSize);
    for (let i = 0; i < numberOfPages; i++) {
      this.noOpages.push(i + 1);
    }
  }

  sliceArray() {
    this.toBeViwehotels = this.hotels.slice(
      this.currentPage * this.pageSize,
      this.currentPage * this.pageSize + this.pageSize
    );
  }

  onPagenation(i: number) {
    if (i > -1 && i < this.noOpages.length) {
      this.currentPage = i;
      this.sliceArray();
    }
  }
}
