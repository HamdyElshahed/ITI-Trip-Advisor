import { HotelsDetailsComponent } from './hotels/hotels-details/hotels-details.component';
import { PlaceComponent } from './hotels/places/place.component';
import { HotelsComponent } from './hotels/hotels/hotels.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';
import { AuthGuard } from './services/guard/auth.guard';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { AddNewRestaurantComponent } from './components/restaurant/add-new-restaurant/add-new-restaurant.component';
import { RestaurantDetailsComponent } from './components/restaurant/restaurant-details/restaurant-details.component';
import { RestaurantsComponent } from './components/restaurant/restaurants/restaurants.component';
import { BookingComponent } from './hotels/booking/booking.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'search', component: SearchComponent },
  { path: 'ht', redirectTo: '/hotels', pathMatch: 'full' },
  { path: 'hotels', component: HotelsComponent },
  { path: 'visitsplaces', component: PlaceComponent },
  { path: 'hotels-details/:id', component: HotelsDetailsComponent },
  { path: 'booking/:id', component: BookingComponent , canActivate: [AuthGuard] },
  { path: 'res', component: RestaurantsComponent },
  { path: 'restaurants', redirectTo: '', pathMatch: 'full' },
  { path: 'restaurant-detailes/:id', component: RestaurantDetailsComponent },
  { path: 'add-new-restaurant', component: AddNewRestaurantComponent },
  { path: '**', redirectTo: '/visitsplaces', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
