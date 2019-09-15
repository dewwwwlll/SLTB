import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {ViewModalPage} from "../view-modal/view-modal.page";

@Component({
  selector: 'app-view-paymeny',
  templateUrl: './view-paymeny.page.html',
  styleUrls: ['./view-paymeny.page.scss'],
})
export class ViewPaymenyPage implements OnInit {

  cardDetails: any;
  journeyDetails: any;
  passengerDetails: any;
  source: string;
  destination: string;
  departure: string;
  arrival: string;
  name: string;
  nic: string;
  phone: Number;
  email: string;


  constructor(private router: Router, private route: ActivatedRoute, public modalCtrl: ModalController) {
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.cardDetails = this.router.getCurrentNavigation().extras.state.cardDetails;
        this.journeyDetails = this.router.getCurrentNavigation().extras.state.journeyDetails;
        this.passengerDetails = this.router.getCurrentNavigation().extras.state.passengerDetails;
      } else {
        console.log('nothing to show');
      }
    });

  }

  async viewModal() {

    let modal = await this.modalCtrl.create({
      component: ViewModalPage,
      componentProps: {
        'source': this.journeyDetails.source,
        'destination': this.journeyDetails.destination,
        'arrival': this.journeyDetails.arrivalTime,
        'departure': this.journeyDetails.departureTime,
        'name': this.passengerDetails.name,
        'nic': this.passengerDetails.nic,
        'phone': this.passengerDetails.phone,
        'email': this.passengerDetails.email,
        'title': 'Ishan'
      }
    });

    return await modal.present();
  }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['search-for-busses']);
  }

}
