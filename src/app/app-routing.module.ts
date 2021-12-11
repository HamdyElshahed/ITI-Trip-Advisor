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

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'home' , redirectTo : '' , pathMatch : 'full'},
  {path: 'login' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent },
  {path: 'profile' , component: ProfileComponent , canActivate: [AuthGuard]  },
  {path: 'verify-email' , component: VerifyEmailComponent},
  {path: 'forgot-password' , component: ForgotPasswordComponent},
  {path: 'search' , component: SearchComponent},
  // { path: '', redirectTo: '/hotels', pathMatch: 'full' },
  { path: 'hotels', component: HotelsComponent },
  { path: 'visitsplaces', component: PlaceComponent },
  { path: 'hotels-details/:id', component: HotelsDetailsComponent },
  { path: '**', redirectTo: '/visitsplaces', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
