import { booking } from './../../models/booking.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingdata?: booking;
  constructor(private service: ProfileService) {}

  ngOnInit(): void {}
  book(form: NgForm) {
    let obj = {
      email: form.value.email,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      phone: form.value.phonenumber,
      startdate: form.value.startdate,
      enddate: form.value.enddate,
      roomCategory: form.value.category,
      numberofguest: form.value.numberofguest,
    };
    this.bookingdata = obj;
    this.submitdata();
  }
  submitdata() {
    this.service.updateReservations(this.bookingdata, 'hotels');
  }
}
