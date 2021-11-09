import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TripAdvisor';
  items: Observable<any[]>;
  item={};
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('restaurant').valueChanges();
    
  }
}
