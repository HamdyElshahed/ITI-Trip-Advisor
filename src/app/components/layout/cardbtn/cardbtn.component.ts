import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-cardbtn',
  templateUrl: './cardbtn.component.html',
  styleUrls: ['./cardbtn.component.scss']
})
export class CardbtnComponent implements OnInit {
  @Input() card! : any;
  constructor( public authservice: AuthService , private profileservice: ProfileService) { }

  ngOnInit(): void {
  }
  addFavorite(){
    this.profileservice.updateFavorites(this.card.id)
  }
}
