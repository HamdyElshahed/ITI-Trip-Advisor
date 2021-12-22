import { booking } from './../../models/booking.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingdata?: booking | any;
  hotelId : any ;
  constructor(private service: ProfileService , private activatedRoute: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res) => {
      if (res && res?.id) {
        this.hotelId = res.id;
      }
  })
}
  book(form: NgForm) {
    let obj = {
      email: form.value.email,
      fname: form.value.firstName,
      lname: form.value.lastName,
      phone: form.value.phonenumber,
      startdate: form.value.startdate,
      enddate: form.value.enddate,
      roomCategory: form.value.category,
      numberofguest: form.value.numberofguest,
      hotelId : this.hotelId
    };
    this.bookingdata = obj;
    this.submitdata();
  }
  submitdata() {
    this.service.updateReservations(this.bookingdata, 'hotels');
  }
}
