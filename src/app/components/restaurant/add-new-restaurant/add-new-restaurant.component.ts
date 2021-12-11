import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-restaurant',
  templateUrl: './add-new-restaurant.component.html',
  styleUrls: ['./add-new-restaurant.component.scss']
})
export class AddNewRestaurantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addNewRestaurant(form:NgForm){
    console.log(form.value);
  }
}
