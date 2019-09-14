import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-search-for-busses',
  templateUrl: './search-for-busses.page.html',
  styleUrls: ['./search-for-busses.page.scss'],
})
export class SearchForBussesPage {


  // @ts-ignore
  private objVal = require('./suggestions.json');

  isShowContent: Boolean = false;

  isDateChange: Boolean = false;

  imageList: Array<String>;

  isSourceFound: boolean;
  isDestinationFound: boolean;
  showSearchResults: boolean;

  searchResults = [];

  isFocus: false;
  isFocus2: false;

  private places = [
    'Athurugiriya',
    'Bambalapitiya',
    'Battaramulla',
    'Batuwatta',
    'Bloemendhal',
    'Boralesgamuwa',
    'Borella',
    'Cinnamon Gardens',
    'Dalugama',
    'Dehiwala',
    'Dematagoda',
    'Fort',
    'Grandpass',
    'Havelock Town',
    'Hokandara',
    'Hulftsdorp',
    'Ja-Ela',
    'Kadawatha',
    'Kaduwela',
    'Kahathuduwa',
    'Kalubowila',
    'Kandana',
    'Kiribathgoda',
    'Kirulapana',
    'Kohuwala',
    'Kollupitiya',
    'Kolonnawa',
    'Koswatte',
    'Kotahena',
    'Kotikawatta',
    'Kottawa',
    'Madampitiya',
    'Maha Nuge Gardens',
    'Maharagama',
    'Malabe',
    'Maligawatta',
    'Maradana',
    'Mattakkuliya',
    'Modara',
    'Moratuwa',
    'Mount-Lavinia',
    'Narahenpita',
    'Nawala',
    'Nugegoda',
    'Wellawatte',
    'Colombo',
    'Rathmalana',
    'Kandy',
    'Warakapola',
    'Hatton',
    'Pettah'
  ];

  private hundred = [
    '100',
    'Fort',
    'Galle Face',
    'Kollupitiya',
    'Bambalapitiya',
    'Wellawatte',
    'Dehiwala',
    'Mount-Lavinia',
    'Ratmalana',
    'Katubedda',
    'Rawatawatta',
    'Moratuwa',
    'Horethuduwa',
    'Gorakana',
    'Keselwatta',
    'Panadura',
    'Colombo',
    'Rathmalana',
    'Kandy',
    'Warakapola',
    'Hatton',
    'Pettah'
  ];
  public startResult = [];
  public destinationResult = [];
  public start = '';
  public destination = '';
  public startCard: '';
  public date = '';

  public startPass;
  public destinationPass;

  public doWeHaveBuses = [];
  public routeNumber = [];
  public routePoints = [];

  getStart: 'startPass';
  getDesti: 'destinationPass';

  public resultView: boolean;
  public btnClickControl: boolean;

  // public sms:SMS;


  constructor(private router: Router, public alertController: AlertController) {
    this.imageList = [];

    this.isSourceFound = false;
    this.isDestinationFound = false;
    this.showSearchResults = false;
  }


  startChanged() {
    console.log(this.start);
    const tempResult = [];

    for (let i = 0; i < this.places.length; i++) {

      const regex = new RegExp(this.start, 'gi');
      const tempResultVar = this.places[i].match(regex);

      if (tempResultVar) {
        tempResult.push(this.places[i]);
      }
    }

    this.startResult = tempResult;
  }

  setStart(result) {
    // this.search=this.startCard;

    const startSet = document.getElementById('startValue') as HTMLInputElement;
    startSet.value = result;
    this.startPass = result;

  }

  checkStartIsTrue() {
    // tslint:disable-next-line:triple-equals
    const lp = this.start;
    const summa = this.start == this.startResult.find(x => x == lp);

    if (!this.start.length) {
      return true;
    } else if (summa) {
      return true;
    } else {
      return false;
    }
  }

  destinationChanged() {
    console.log(this.destination);
    const tempResult = [];

    for (let i = 0; i < this.places.length; i++) {

      const regex = new RegExp(this.destination, 'gi');
      const tempResultVar = this.places[i].match(regex);

      if (tempResultVar) {
        tempResult.push(this.places[i]);
      }
    }

    this.destinationResult = tempResult;


  }

  checkDestinationIsTrue() {
    const lp = this.destination;
    const summa = this.destination == this.destinationResult.find(y => y == lp);

    if (!this.destination.length) {
      return true;
    } else if (summa) {
      return true;
    } else {
      return false;
    }
  }


  setDestination(result) {
    // this.search=this.startCard;

    const destSet = document.getElementById('destinationValue') as HTMLInputElement;
    destSet.value = result;
    this.destinationPass = result;


  }

// routes={
//   start:this.startPass,
//   destination:this.destinationPass
// }

  load(result) {


    const routes = {
      start: this.startPass,
      destination: this.destinationPass
    };

    const navigationExtras: NavigationExtras = {
      queryParams: {
        start: routes.start,
        destination: routes.destination
      }
    };

    this.router.navigate(['srr-host/srr-host/text'], navigationExtras);


  }

  activateButton() {
    if ((!this.startPass && this.destinationPass)) {
      return false;
    } else if (this.startPass && this.destinationPass) {
      return true;
    }

  }

  // show content variable


  async findRoute() {
    const start = this.startPass;
    const destination = this.destinationPass;
    if (this.startPass === this.destinationPass) {

      const alert = await this.alertController.create({
        header: 'Incorrect Values',

        message: 'You cannot find bus for the same start and destination',
        buttons: [{
          text: 'Okay',
          handler: () => {
            this.isShowContent = true;
          }
        }]
      });

      await alert.present();

    } else if (this.btnClickControl) {
      console.log('Already found');

    }
    // else {
    //   for (let i = 0; i < this.hundred.length; i++) {
    //
    //     if (this.hundred[i] === start) {
    //
    //       for (let j = 0; j < this.hundred.length; j++) {
    //
    //         if (this.hundred[j] === destination) {
    //
    //           this.routeNumber.push('100');
    //           this.routePoints.push(this.hundred[1] + ' - ' + this.hundred[this.hundred.length - 1]);
    //           // this.doWeHaveBuses.push("yes");
    //           this.resultView = true;
    //
    //         }
    //
    //       }
    //
    //     }
    //
    //   }
    //   this.btnClickControl = true;
    // }
    else {
      // this.objVal.forEach(route => {
      //
      //   alert('root source: ' + route.RootSource);
      //   route.BusHalts.forEach(busHalt => {
      //     if (busHalt.halt === this.startPass) {
      //       alert('source found ' + busHalt.halt);
      //       this.isSourceFound = true;
      //     }
      //     if (busHalt.halt === this.destinationPass) {
      //       alert('destination found ' + busHalt.halt);
      //       this.isDestinationFound = true;
      //     }
      //   });
      //
      //   if (this.isSourceFound && this.isDestinationFound) {
      //     this.searchResults.push(route);
      //   }
      //
      //   this.isSourceFound = false;
      //   this.isDestinationFound = false;
      //
      //   alert(this.searchResults.length);
      //
      // });
      //
      // this.showSearchResults = this.isSourceFound && this.isDestinationFound;
      // // this.isSourceFound = false;
      // // this.isDestinationFound = false;

      this.router.navigate(['search-results']);
    }

  }

  dateChange() {
    if (this.isDateChange) {
      return true;
    } else {
      return false;
    }
  }

  showDescription() {
    if (this.startPass != this.destinationPass) {
      return true;
    } else
      return false;
  }


  showContent() {
    if (this.isShowContent) {
      return true;
    } else {
      return false;
    }
  }
}
