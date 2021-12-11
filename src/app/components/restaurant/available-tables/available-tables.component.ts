import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Table } from 'src/app/models/restaurant.model';

@Component({
  selector: 'app-available-tables',
  templateUrl: './available-tables.component.html',
  styleUrls: ['./available-tables.component.scss']
})
export class AvailableTablesComponent implements OnInit {
@Input() tables:Promise<Table[]> | undefined;
@Output()selectedTablePrice=new EventEmitter();
  constructor() {
   }

  ngOnInit(): void {
        // console.log(this.tables);
        this.tables?.then(val=>{
          console.log(val);
        })

  }
  confirmReservation(table:Table){
    this.selectedTablePrice.emit(table.reservationPrice);

  }
  sendBookingInfo(form:NgForm){
    console.log(form.value);
  }

}
