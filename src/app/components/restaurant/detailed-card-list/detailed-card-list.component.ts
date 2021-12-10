import { Component, Input, OnInit } from '@angular/core';
import { QueryDocumentSnapshot, QuerySnapshot } from '@firebase/firestore';
import { Subject } from 'rxjs';
import { Restaurant } from 'src/app/models/restaurant.model';
import { FilterService } from 'src/app/services/restaurant-services/filter.service';

@Component({
  selector: 'app-detailed-card-list',
  templateUrl: './detailed-card-list.component.html',
  styleUrls: ['./detailed-card-list.component.scss']
})
export class DetailedCardListComponent implements OnInit {
   topRestaurants=new Subject< Restaurant[]>();

   currentQuerSnapshot!: QueryDocumentSnapshot<Restaurant>;
  constructor(private filterService:FilterService) { }

  ngOnInit(): void {


    this.filterService.getFirstPage().then(val=>{
      let res :Restaurant[]=[];
      this.currentQuerSnapshot=val.docs[val.docs.length-1]&&val.docs[val.docs.length-1];
      val.docs.forEach((restaurant,index,arr)=>{
        res.push(restaurant.data());
        if (index===arr.length-1) {
                this.topRestaurants.next(res)
        }
      })
    })

    // this.filterService.getTopRatedRestaurants().subscribe(val=>{
    //   this.topRestaurants=val;
    //   console.log('recieved top rated ',val);
    // })
  }

  next(){

    this.filterService.getNextPage(this.currentQuerSnapshot).then(val=>{
      let res :Restaurant[]=[];
      if (val===undefined||val.empty) {
        return
      }
      this.currentQuerSnapshot=val.docs[val.docs.length-1]&&val.docs[val.docs.length-1];
      val.docs.forEach((restaurant,index,arr)=>{
        res.push(restaurant.data());
        if (index===arr.length-1) {
                this.topRestaurants.next(res)
        }
      })
    })

  }
  prev(){

    this.filterService.getPrevPage(this.currentQuerSnapshot).then(val=>{
      let res :Restaurant[]=[];
      if (val===undefined||val.empty) {
        return
      }
      this.currentQuerSnapshot=val.docs[val.docs.length-1]&&val.docs[val.docs.length-1];
      console.log(this.currentQuerSnapshot);
      val.docs.forEach((restaurant,index,arr)=>{
        res.push(restaurant.data());
        if (index===arr.length-1) {
                this.topRestaurants.next(res)
        }
      })
    })
  }

}
