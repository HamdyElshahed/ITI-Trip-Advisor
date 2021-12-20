import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardstyle2',
  templateUrl: './cardstyle2.component.html',
  styleUrls: ['./cardstyle2.component.scss']
})
export class Cardstyle2Component implements OnInit {
  @Input() card! : any;
  @Input() type! : any;

  constructor() { }

  ngOnInit(): void {
  }

}
