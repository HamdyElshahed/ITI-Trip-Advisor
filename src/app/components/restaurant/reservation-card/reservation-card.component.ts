import { DatePipe, formatDate, Time } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { Table } from 'src/app/models/restaurant.model';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.scss']
})
export class ReservationCardComponent implements OnInit {
@Output() findAvailableTablesList=new EventEmitter<[model:NgbDateStruct,time:NgbTimeStruct,personNo:number]>();
  model: NgbDateStruct;
  time:NgbTimeStruct;
  persons:Array<any>=[
    {num:1,name:'person'},
    {num:2,name:'persons'},
    {num:3,name:'persons'},
  ];
  personsNo=1;
  constructor(){
    let date=new Date();
    this.model={
      year:date.getFullYear(),
      month:date.getMonth()+1,
      day:date.getDate()
    }
    this.time={
      hour: date.getHours(),
      minute: date.getMinutes(),
      second:0
    };
  }

  ngOnInit(): void {

    }


    findAvailableTables(){
      console.log(this.time);
      this.findAvailableTablesList.emit([this.model,this.time,this.personsNo]);

    }

}
