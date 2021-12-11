import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant, FEATURES, Location } from 'src/app/models/restaurant.model';
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
  filterItemListFullAddress: string[] = []; //used for the nighborhood address full text insteated the splited one below 
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
      //In case feature ? then go ahead and get the list stored locally in 'src/app/models/restaurant.model'
      case 'Features':
        this.filterItemList = FEATURES;
        this.filterItemListLength = this.filterItemList.length;

        break;
      //In case Neighborhoods ? then go ahead and get all restaurants filter them by city
      case 'Neighborhoods':
        const restaurantSplitedAddrr = new Set<string>();
        const restaurantFulldAddrr = new Set<string>();
        this.filterService.queryForNeighborhoods(this.filterService.locatoion.city,"city")
          .subscribe((queryRes) => {
            queryRes.filter((val) => {
              //get the last part of the address wich is the street
              // console.log(val.location.address1.split(" ").slice(1).join(" "));
              restaurantSplitedAddrr.add(val.location.address1.split(" ").slice(1).join(" "));
              restaurantFulldAddrr.add(val.location.address1);
            })
            this.filterItemList = []; //this is important to not dublicate the list items
            for (let item of restaurantSplitedAddrr) {
              this.filterItemList.push(item); //push the street names into filter item list
            }
            for (let item of restaurantFulldAddrr) {
              this.filterItemListFullAddress.push(item);//push the FULL address names into filterItemListFullAddress
            }
            // console.log(this.filterItemListFullAddress);
            this.filterItemListLength = this.filterItemList.length;
          })

        break;

      case 'Categories':
        const categories = new Set<string>();
        this.filterService.allRestaurantList.subscribe((queryRes) => {
          queryRes.filter((val) => {
            // console.log(val.categories[0].title);
            categories.add(val.categories[0].title)
          })
          this.filterItemList = [];
          for (let item of categories) {
            this.filterItemList.push(item);
          }
          this.filterItemListLength = this.filterItemList.length;
        })
        break;

      default:
        break;
    }

  }


  onCheckBoxChange(e: Event) {
    if ((e.target as HTMLInputElement).checked) {
      switch (this.filterItemName) {
        case "Features":
          this.filterService.queryForFeatures((e.target as HTMLInputElement).value)
            .subscribe((queryRes) => {
              console.log(queryRes);
              this.filterService.updateRestaurantList(queryRes);
            })
          break;
        case "Categories":
          this.filterService.queryForCategory((e.target as HTMLInputElement).value)
            .subscribe((queryRes) => {
              console.log(queryRes);
              this.filterService.updateRestaurantList(queryRes);
            })
          break;
        case "Neighborhoods":
          this.filterService.queryForNeighborhoodOf((e.target as HTMLInputElement).name,"address1")  // . name because the full address stored there
            .subscribe((queryRes) => {
              console.log(queryRes);
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
    //         city: "Alex",
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
