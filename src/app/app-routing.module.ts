import { PlaceComponent } from './hotels/places/place.component';
import { HotelsComponent } from './hotels/hotels/hotels.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/hotels', pathMatch: 'full' },
  { path: 'hotels', component: HotelsComponent },
  { path: 'visitsplaces', component: PlaceComponent },
  { path: '**', redirectTo: '/visitsplaces', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
