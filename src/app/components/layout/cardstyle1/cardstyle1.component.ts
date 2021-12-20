import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardstyle1',
  templateUrl: './cardstyle1.component.html',
  styleUrls: ['./cardstyle1.component.scss']
})
export class Cardstyle1Component implements OnInit {
 @Input() card! : any;
 @Input() type! : any;
  constructor() { }

  ngOnInit(): void {
  }

}
