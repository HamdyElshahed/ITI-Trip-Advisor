import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterItemComponent } from './components/restaurant/filter-item/filter-item.component';
import { RestaurantsComponent } from './components/restaurant/restaurants/restaurants.component';
import { RestaurantOwlCarouselComponent } from './components/restaurant/restaurant-owl-carousel/restaurant-owl-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CardComponent } from './components/restaurant/card/card.component';
import { FooterComponent } from './components/restaurant/footer/footer.component';
import { HeaderComponent } from './components/restaurant/header/header.component';
import { DetailedCardComponent } from './components/restaurant/detailed-card/detailed-card.component';
import { DetailedCardListComponent } from './components/restaurant/detailed-card-list/detailed-card-list.component';
import { RestaurantDetailsComponent } from './components/restaurant/restaurant-details/restaurant-details.component';
import { MapComponent } from './components/restaurant/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterItemComponent,
    RestaurantsComponent,
    RestaurantOwlCarouselComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    DetailedCardComponent,
    DetailedCardListComponent,
    RestaurantDetailsComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase), //for firebase connection
    AngularFirestoreModule,
    BrowserAnimationsModule,
    CarouselModule,

    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
