import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant, FEATURES } from 'src/app/models/restaurant.model';
import { FilterService } from 'src/app/services/restaurant-services/filter.service';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent implements OnInit {
  @Input() filterItemName!: String;
  queryResult: Restaurant[] = [];
  filterItemList: string[] = [];
  filterItemListLength!: number;
  /**
   * This is how the component will look lick
   *    filterItemName
   * cbx:filterItemList[0]
   * cbx:filterItemList[1]
   * cbx:filterItemList[2]
   * cbx:filterItemList[3]
   * cbx:filterItemList[4]
   */

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    /**
     * depending on the filterItemName ! fill the filterItemList , OK!
     */
    switch (this.filterItemName) {
      case 'Features':
        //In case feature ? then go ahead and get the list stored locally in 'src/app/models/restaurant.model'
        this.filterItemList = FEATURES;
        break;

      case 'Neighborhoods':
        const cities = new Set<string>();
        this.filterService.allRestaurantList.subscribe((queryRes) => {
          queryRes.filter((val) => {
            cities.add(val.location.city)
          })
          for (let item of cities) {
            this.filterItemList.push(item);
          }
        })

        break;

      case 'Categories':
        const categories = new Set<string>();
        this.filterService.allRestaurantList.subscribe((queryRes) => {
          queryRes.filter((val) => {
            categories.add(val.categories.title)
          })
          for (let item of categories) {
            this.filterItemList.push(item);
          }
        })
        break;

      default:
        break;
    }
    this.filterItemListLength = this.filterItemList.length;

  }


  onCheckBoxChange(e: Event) {
    if ((e.target as HTMLInputElement).checked) {
      switch (this.filterItemName) {
        case "Features":
          this.filterService.queryForFeatures((e.target as HTMLInputElement).value)
            .subscribe((queryRes) => {
              this.filterService.updateRestaurantList(queryRes);
            })
          break;
        case "Categories":
          this.filterService.queryForCategory((e.target as HTMLInputElement).value)
            .subscribe((queryRes) => {
              this.filterService.updateRestaurantList(queryRes);
            })
          break;
        case "Neighborhoods":
          this.filterService.queryForNeighborhoods((e.target as HTMLInputElement).value)
            .subscribe((queryRes) => {
              this.filterService.updateRestaurantList(queryRes);
            })
          break;

        default:
          break;
      }


    }
    //iportant Restaurant template for adding new restaurant dont delete you will use it later
  //   this.filterService.addItem({
  //     image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/JXi5a8UeGPrKwbGBA4ZImA/o.jpg",
  //     phone: "+1859122222600",
  //     is_closed: true,
  //     url: "https://www.yelp.com/biz/obc-kitchen-lexington?adjust_creative=isHnLZ2-HnajgMvg5U-9-A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=isHnLZ2-HnajgMvg5U-9-A",
  //     price: 200,
  //     review_count: 1110,
  //     coordinates: {
  //         longitude: -84.4964695004246,
  //         latitude: 37.9950994324964
  //     },
  //     categories: {
  //         title: "Bizza"
  //     },
  //     transactions: "delivery",
  //     is_claimed: false,
  //     name: "fhfhggh",
  //     location: {
  //         state: "CA",
  //         address: "3373 Tates Creek Rd",
  //         city: "Cairo",
  //         country: "US"
  //     },
  //     features: [
  //         "Reservations",
  //         "Has TV",
  //         "Offers Takeout",
  //         "Staff wears masks",
  //         "Good for Groups"
  //     ],
  //     id: "G3D2FGjtsFOeLiyAZgEQ",
  //     rating: 460,
  //     photos: [
  //         "https://s3-media4.fl.yelpcdn.com/bphoto/JXi5a8UeGPrKwbGBA4ZImA/o.jpg",
  //         "https://s3-media1.fl.yelpcdn.com/bphoto/7f_WdNLCGZmjUQEw6h6xoQ/o.jpg",
  //         "https://s3-media2.fl.yelpcdn.com/bphoto/eqMn--a_zt-qU-62tWuYUw/o.jpg"
  //     ]
  // })
    
  }
}
