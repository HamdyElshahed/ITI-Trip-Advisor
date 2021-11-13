import { NgModule } from '@angular/core';
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
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule  } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { Cardstyle4Component } from './components/layout/cardstyle4/cardstyle4.component';


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
    DashboardComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    Cardstyle4Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    CarouselModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
