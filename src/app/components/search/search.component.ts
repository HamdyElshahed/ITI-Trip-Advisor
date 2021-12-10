import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router , ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ProfileService } from 'src/app/services/profile.service';
import { SearchService } from 'src/app/services/search.service';
import { doc, updateDoc, arrayUnion, arrayRemove } from "@angular/fire/firestore";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchval : string = '';
  userdata : any = [];
  getdatserach : any;
  arr : string[] = ['hotels' , 'restaurant' , 'shopping' , 'vacation'];
  constructor(
    private activaterouter: ActivatedRoute ,
    private angularfirestore : AngularFirestore ,
    private searchservice: SearchService ,
    private profileservice: ProfileService
    ) { }

  ngOnInit(): void {
    this.activaterouter.queryParams.subscribe(params => {
      this.searchval = params['searchkey'];
      for (let i = 0; i < this.arr.length; i++) {
        this.searchservice.querySearchByName(this.searchval , this.arr[i])
        .subscribe(async data => {
          console.log(data)
          if (data.length !== 0 ) {
             this.getdatserach =  data;
            this.profileservice.updateRecentlySearch(data , this.searchval , this.arr[i]);
            const element : any = data[0];
            await this.angularfirestore.doc(`hotels/${element.id}`).update({type : 'hotels'} )
          }
        });
      }
      this.searchservice.querySearchCollection(this.searchval).subscribe(async (data)=>{
        if (data.length !== 0) {
          this.getdatserach = await data;
          await this.profileservice.updateRecentlySearch(data , this.searchval , this.searchval);
          console.log(data)
          // for (let i = 0; i <= 11 ; i++) {

          // }
        }
      })
    });

    console.log(this.searchval)

    console.log(this.getdatserach);

  }



}
