import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './components/layout/carousel/carousel.component';
import { CardrateComponent } from './components/layout/cardrate/cardrate.component';
import { CardbtnComponent } from './components/layout/cardbtn/cardbtn.component';
import { CardbadgComponent } from './components/layout/cardbadg/cardbadg.component';
import { Cardstyle1Component } from './components/layout/cardstyle1/cardstyle1.component';
import { Cardstyle2Component } from './components/layout/cardstyle2/cardstyle2.component';
import { Cardstyle3Component } from './components/layout/cardstyle3/cardstyle3.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { Cardstyle4Component } from './components/layout/cardstyle4/cardstyle4.component';
import { NavitemComponent } from './components/layout/navitem/navitem.component';
import { SearchrecentitemComponent } from './components/layout/searchrecentitem/searchrecentitem.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { HotelsComponent } from './hotels/hotels/hotels.component';
import { HotelsCardComponent } from './hotels/hotels-card/hotels-card.component';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { PlaceComponent } from './hotels/places/place.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HotelsDetailsComponent } from './hotels/hotels-details/hotels-details.component';
import { HttpInterceptor } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptors';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireStorageModule ,BUCKET} from '@angular/fire/compat/storage';
import { GoogleMapsModule } from '@angular/google-maps';
import {  HttpClientJsonpModule } from '@angular/common/http';
import { FilterItemComponent } from './components/restaurant/filter-item/filter-item.component';
import { RestaurantsComponent } from './components/restaurant/restaurants/restaurants.component';
import { RestaurantOwlCarouselComponent } from './components/restaurant/restaurant-owl-carousel/restaurant-owl-carousel.component';
import { CardComponent } from './components/restaurant/card/card.component';
import { DetailedCardComponent } from './components/restaurant/detailed-card/detailed-card.component';
import { DetailedCardListComponent } from './components/restaurant/detailed-card-list/detailed-card-list.component';
import { RestaurantDetailsComponent } from './components/restaurant/restaurant-details/restaurant-details.component';
import { MapComponent } from './components/restaurant/map/map.component';
import { IconicFeaturesListComponent } from './components/restaurant/iconic-features-list/iconic-features-list.component';
import { MenuComponent } from './components/restaurant/menu/menu.component';
import { AddNewDishModalComponent } from './components/restaurant/add-new-dish-modal/add-new-dish-modal.component';
import { ReservationCardComponent } from './components/restaurant/reservation-card/reservation-card.component';
import { AvailableTablesComponent } from './components/restaurant/available-tables/available-tables.component';
import { PaymentComponent } from './components/restaurant/payment/payment.component';
import { AddNewRestaurantComponent } from './components/restaurant/add-new-restaurant/add-new-restaurant.component';
import { BookingComponent } from './hotels/booking/booking.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CarouselComponent,
    CardrateComponent,
    CardbtnComponent,
    CardbadgComponent,
    Cardstyle1Component,
    Cardstyle2Component,
    Cardstyle3Component,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    Cardstyle4Component,
    NavitemComponent,
    SearchrecentitemComponent,
    SearchComponent,
    ProfileComponent,
    HotelsComponent,
    HotelsCardComponent,
    PlaceComponent,
    HotelsDetailsComponent,
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
    ReservationCardComponent,
    AvailableTablesComponent,
    PaymentComponent,
    AddNewRestaurantComponent,
    BookingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    CarouselModule,
    FormsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    FontAwesomeModule,
    CarouselModule,
    NgbModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    NgbModule,
    NgxSkeletonLoaderModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  exports: [TranslateModule],
  providers: [httpInterceptorProviders ,{ provide: BUCKET, useValue: 'iti-trip-advisor.appspot.com' }],
  bootstrap: [AppComponent]

})
export class AppModule {}
