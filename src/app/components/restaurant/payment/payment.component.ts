import { formatDate } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { STRIP_KEY } from '../../../../strip'
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentHandler: any = null;
  @Input() price!: number;
  @Input() restaurantID!:string;
  formValue!: any;
  constructor() { }

  ngOnInit(): void {
    this.invokeStripe();
  }



  makePayment(amount: number | null) {
    let sendBookingInfo=this.sendBookingInfo;
    let formValues=this.formValue;
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: STRIP_KEY,
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
        alert('Stripe token generated!');
        sendBookingInfo(formValues);
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

  sendBookingInfo(formValu:any) {
    console.log(formValu);
    let bookingData={...formValu,restaurantID:this.restaurantID};
    console.log(bookingData);
    //now booking info is ready to be sent to users booking collection
  }

  pay(form: NgForm) {
    this.formValue = form.value;
    console.log(this.formValue);
    console.log('sndBookingInfo');
    this.makePayment(this.price)
    console.log(this.price);
  }
}
