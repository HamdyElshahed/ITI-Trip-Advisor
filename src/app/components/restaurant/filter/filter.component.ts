import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  filterBy:String[];
  constructor() { 
   this.filterBy= ["Features","Neighborhoods","Categories",];
  }

  ngOnInit(): void {
  }

}
