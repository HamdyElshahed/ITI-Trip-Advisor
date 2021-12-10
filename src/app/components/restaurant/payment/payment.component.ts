import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentHandler:any = null;
  @Input() price!:number|null;
  constructor() { }

  ngOnInit(): void {
    this.invokeStripe();
  }

  makePayment(amount:number|null) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51K4wUrHbn50uwJtG690oP7l7S78DOXXmHF5g20UVfivwdZ9KqxMM594lolUNemPbO5IgFn1oBv7qke87zjpyAfJV00yx3ynE34',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
        alert('Stripe token generated!');
      }
    });

    paymentHandler.open({
      name: 'Positronx',
      description: '3 widgets',
      amount: amount&&amount * 100
    });
  }

  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51K4wUrHbn50uwJtG690oP7l7S78DOXXmHF5g20UVfivwdZ9KqxMM594lolUNemPbO5IgFn1oBv7qke87zjpyAfJV00yx3ynE34',
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
}
