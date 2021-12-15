import { formatDate } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';
import { STRIP_KEY } from '../../../../strip'
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentHandler: any = null;
  @Input() price!: number;
  restaurantID!:string;
  formValue!: any;
  constructor(private profileServece:ProfileService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.restaurantID = this.activatedRoute.snapshot.params.id;
    console.log(this.restaurantID);
    this.invokeStripe();
  }

  makePayment(amount: number | null) {
    let sendBookingInfo=this.sendBookingInfo;
    let formValues=this.formValue;
    let restID=this.restaurantID;
    let profileServ=this.profileServece;
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: STRIP_KEY,
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
        alert('Stripe token generated!');
        sendBookingInfo(formValues,restID,profileServ);
      }
    });

    paymentHandler.open({
      name: 'Positronx',
      description: '3 widgets',
      amount: amount && amount * 100
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: STRIP_KEY,
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }

      window.document.body.appendChild(script);
    }
  }

  sendBookingInfo(formValu:any,restID,profileServece) {
    console.log(formValu);
    let bookingData={...formValu,"restaurantID":restID};
    console.log(bookingData);
    //now booking info is ready to be sent to users booking collection
    profileServece.updateReservations(bookingData,"restaurant");
  }

  pay(form: NgForm) {
    this.formValue = form.value;
    console.log(this.formValue);
    console.log('sndBookingInfo');
    this.makePayment(this.price)
    console.log(this.price);
  }
}
