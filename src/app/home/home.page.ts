import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

declare const require: any;
const freeSlotsData = require('../../assets/sampledata.json');

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  seatList: any[] = [];
  selected: any[] = [];
  totalPrice: number;
  @ViewChild('amount', {static: false}) price: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.seatList = freeSlotsData.rows;
    this.totalPrice = 0;
    console.log(this.seatList);
  }

  getBackgroundColor(selected, booked) {
    if (booked) {
      return {'booked-seat' : true};
    } else if ( selected ) {
      return {'selected-seat' : true};
    } else {
      return {'available-seat' : true};
    }
  }

  onSelectSeat(seat) {
    for (const s of this.seatList) {
      for ( const sI of s.seats) {
        if (sI.id === seat.id) {
          sI.isSelected = !sI.isSelected;
          if (sI.isSelected && !sI.isBooked) {
            this.selected.push(sI);
            console.log(this.totalPrice += sI.price);
          } else {
            for (const sel of this.selected ) {
              if (sel === sI) {
                console.log(this.totalPrice -= sI.price);
                this.selected.splice(this.selected.indexOf(sel), 1);
                console.log(this.selected.indexOf(sel));
              }
            }
          }
        }
      }
    }
  }

}
