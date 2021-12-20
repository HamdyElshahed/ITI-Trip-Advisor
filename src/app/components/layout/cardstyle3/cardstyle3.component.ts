import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardstyle3',
  templateUrl: './cardstyle3.component.html',
  styleUrls: ['./cardstyle3.component.scss']
})
export class Cardstyle3Component implements OnInit {
  @Input() card! : any;
  @Input() type! : any;
  constructor() { }

  ngOnInit(): void {
  }

}
