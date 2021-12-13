import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Restaurant } from 'src/app/models/restaurant.model';
import { RestaurantsMainServiceService } from 'src/app/services/restaurant-services/restaurants-main.service';

@Component({
  selector: 'app-add-new-restaurant',
  templateUrl: './add-new-restaurant.component.html',
  styleUrls: ['./add-new-restaurant.component.scss']
})
export class AddNewRestaurantComponent implements OnInit {

  constructor(private mainService:RestaurantsMainServiceService) { }

  ngOnInit(): void {
  }
  addNewRestaurant(form:NgForm){
    console.log(form.value);
    let formData=form.value;
    let newRest:Restaurant={
      location:{address1:formData.address,
        country:formData.country,
      city:formData.city,
      state:formData.state,
    },
    id:"0",
    name:formData.name,
    categories:[formData.category],
    phone:formData.phone,
    url:formData.url,
    is_claimed:formData.is_claimed
  }
    this.mainService.addNewRestaurantTemp(newRest)
  }
}


/**
 * {
    "country": "Egypt",
    "name": "HG",
    "address": "123 st.",
    "city": "Cairo",
    "state": "Maadi",
    "phone": 11223344,
    "url": "www.HG.com",
    "category": "Restaurant",
    "is_claimed": true
}
 */
