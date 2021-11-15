import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.scss']
})
export class Nav2Component implements OnInit {
  isOpen:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  toglleNavbar()
  {
    this.isOpen=!this.isOpen;
  }

}
