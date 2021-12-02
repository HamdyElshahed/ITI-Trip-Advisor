import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HotelsComponent } from './hotels/hotels/hotels.component';
import { HotelsCardComponent } from './hotels/hotels-card/hotels-card.component';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { PlaceComponent } from './hotels/places/place.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HotelsDetailsComponent } from './hotels/hotels-details/hotels-details.component';
//  import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HotelsComponent,
    HotelsCardComponent,
    PlaceComponent,
    HotelsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
