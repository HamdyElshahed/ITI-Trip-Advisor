import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Table } from 'src/app/models/restaurant.model';

@Component({
  selector: 'app-available-tables',
  templateUrl: './available-tables.component.html',
  styleUrls: ['./available-tables.component.scss']
})
export class AvailableTablesComponent implements OnInit {
@Input() tables:Promise<Table[]> | undefined;
showConfirmation:boolean=false;
selectedTablePrice=new Subject<number>();
  constructor() {
   }

  ngOnInit(): void {
        // console.log(this.tables);
        this.tables?.then(val=>{
          console.log(val);
        })

  }
  confirmReservation(table:Table){
    this.showConfirmation=true;
    this.selectedTablePrice.next(table.reservationPrice)

  }

}
