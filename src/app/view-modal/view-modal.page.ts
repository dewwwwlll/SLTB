import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from "@ionic/angular";

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.page.html',
  styleUrls: ['./view-modal.page.scss'],
})
export class ViewModalPage implements OnInit {

  cardDetails: any;
  journeyDetails: any;
  passengerDetails: any;
  title: string;
  source: string;
  destination: string;
  departure: string;
  arrival: string;
  name: String;
  nic: String;
  phone: String;
  email: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.source = navParams.get('source');
    this.title = navParams.get('title');
    this.destination = navParams.get('destination');
    this.departure = navParams.get('departure');
    this.arrival = navParams.get('arrival');
    this.name = navParams.get('name');
    this.nic = navParams.get('nic');
    this.phone = navParams.get('phone');
    this.email = navParams.get('email');
  }


  // dismissModal() {
  //   let data = [];
  //   this.viewCtrl.dismiss(data);
  // }
  ngOnInit() {
  }

}
