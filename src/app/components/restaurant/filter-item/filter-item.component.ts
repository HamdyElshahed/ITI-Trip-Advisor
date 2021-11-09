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
            console.log(val.location.city);
            console.log("here i am in citeis");
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
            console.log(val.categories.title);
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
          this.filterService.queryForNeighborhoods((e.target as HTMLInputElement).value)
            .subscribe((queryRes) => {
              console.log(queryRes);
              this.filterService.updateRestaurantList(queryRes);
            })
          break;

        default:
          break;
      }


    }
  }
}
