import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewRestaurantComponent } from './components/restaurant/add-new-restaurant/add-new-restaurant.component';
import { RestaurantDetailsComponent } from './components/restaurant/restaurant-details/restaurant-details.component';
import { RestaurantsComponent } from './components/restaurant/restaurants/restaurants.component';

const routes: Routes = [
  {path:'',component:RestaurantsComponent},
  {path:'home',redirectTo:'',pathMatch:'full'},
  {path:'restaurant-detailes/:id',component:RestaurantDetailsComponent},
  {path:'add-new-restaurant',component:AddNewRestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
