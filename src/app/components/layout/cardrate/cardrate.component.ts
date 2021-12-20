import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardrate',
  templateUrl: './cardrate.component.html',
  styleUrls: ['./cardrate.component.scss']
})
export class CardrateComponent implements OnInit {
 @Input() card! : any;
 rate : any;
  constructor() { }

  ngOnInit(): void {
    this.rate = this.card.rate || this.card.rating ;
  }

}
