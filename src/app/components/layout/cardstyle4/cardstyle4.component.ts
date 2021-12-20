import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardstyle4',
  templateUrl: './cardstyle4.component.html',
  styleUrls: ['./cardstyle4.component.scss']
})
export class Cardstyle4Component implements OnInit {
  @Input() card! : any;
  @Input() type! : any;

  constructor() { }

  ngOnInit(): void {
  }

}
