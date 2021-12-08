import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule ,BUCKET} from '@angular/fire/compat/storage';


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
import { IconicFeaturesListComponent } from './components/restaurant/iconic-features-list/iconic-features-list.component';
import { MenuComponent } from './components/restaurant/menu/menu.component';
import { AddNewDishModalComponent } from './components/restaurant/add-new-dish-modal/add-new-dish-modal.component';
import { FormsModule } from '@angular/forms';


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
    IconicFeaturesListComponent,
    MenuComponent,
    AddNewDishModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase), //for firebase connection
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    CarouselModule,

    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,

  ],
  providers: [{ provide: BUCKET, useValue: 'iti-trip-advisor.appspot.com' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
