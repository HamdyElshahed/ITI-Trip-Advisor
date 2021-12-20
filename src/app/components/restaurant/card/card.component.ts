import { Component, Input, OnInit } from '@angular/core';
import { arrayUnion } from '@angular/fire/firestore';
import { Restaurant } from 'src/app/models/restaurant.model';
import { ProfileService } from 'src/app/services/profile.service';
import { FilterService } from 'src/app/services/restaurant-services/filter.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() restaurant!: Restaurant;
  currentRate!: number;
  isFav: boolean = false;
  isLogedIn: boolean = false;
  favorites: any[] = [];

  constructor(private profileService: ProfileService, private filterService: FilterService) { }

  ngOnInit(): void {
    this.currentRate = this.restaurant.rating ? this.restaurant.rating : 0;
    this.filterService

    this.profileService.userDataObs.subscribe(val => {
      if (val) {
        this.isLogedIn = true;
        val.favorites.forEach(val => {
          if (val['uid'] == this.restaurant.id) {
            this.isFav = true;
          }
          // console.log(val['uid']);
        })
        this.favorites = val.favorites;
      }

    })

  }

  addToFavorites() {
    if (this.isLogedIn) {
      let favListItemes: any[] = [];
      if (this.isFav) {
        this.isFav = false;

        this.favorites.forEach(val => {
          if (val['uid'] != this.restaurant.id) {
            favListItemes.push({ "uid": val['uid'] })
          }
        }
        )

        console.log(favListItemes);
        this.profileService.deleteFavorites(favListItemes);
      } else {
        this.profileService.updateFavorites(this.restaurant.id);
      }
    }

  }
}

