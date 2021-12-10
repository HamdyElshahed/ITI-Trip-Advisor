import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchrecentitem',
  templateUrl: './searchrecentitem.component.html',
  styleUrls: ['./searchrecentitem.component.scss']
})
export class SearchrecentitemComponent implements OnInit {
  @Input() item! : any;
  constructor() { }

  ngOnInit(): void {
  }

}
