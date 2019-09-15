import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {NavController, NavParams, ToastController} from "@ionic/angular";

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {
  journeyDetails: any;
  passengerDetails: any;
  cardDetails: {
    cardNumber: Number,
    cardType: string,
    cardName: string,
    cvv: Number,
    month: string
  };

  cardNumber: string;
  cardType: string;
  cardName: string;
  cvv: string;
  month: string;
  payDate: Date;
  imageUrl: String;
  hours: number;
  minimum: string;
  maximum: string;
  acceptedCreditCards: {'visa': RegExp, mastercard: RegExp, amex: RegExp, discover: RegExp, diners_club: RegExp, jcb: RegExp};

  constructor(private route: ActivatedRoute, private router: Router, public toastCtrl: ToastController) {
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.journeyDetails = this.router.getCurrentNavigation().extras.state.data1;
        this.passengerDetails = this.router.getCurrentNavigation().extras.state.data2;
      } else {
        console.log('nothing to show');
      }
    });
    this.acceptedCreditCards = {
      visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
      mastercard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
      amex: /^3[47][0-9]{13}$/,
      discover: /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
      diners_club: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
      jcb: /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/
    };

    this.setPaymentTime();
    this.setMinimum();
    this.maximum = "2040-12-31";


  }
  ngOnInit() {
  }


  checkLuhn() {
    var value = this.cardNumber;
    value = value.toString().replace(/\D/g, '');
    var sum = 0;
    var shouldDouble = false;
    // loop through values starting at the rightmost side
    for (var i = value.length - 1; i >= 0; i--) {
      var digit = parseInt(value.charAt(i), 10);

      if (shouldDouble) {
        if ((digit *= 2) > 9) digit -= 9;
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }
    return (sum % 10) == 0;
  }

  checkSupported() {
    // remove all non digit characters
    var isValidCardNumber = this.checkLuhn();
    var value = this.cardNumber.replace(/\D/g, '');
    var accepted = false;
    var creditCards = this.acceptedCreditCards;
    var cardType = this.cardType;

    // loop through the keys (visa, mastercard, amex, etc.)
    Object.keys(creditCards).forEach(function(key) {
      var regex = creditCards[key];
      if (regex.test(value)) {
        cardType = key;
        accepted = true;
      }
    });

    this.cardType = cardType;
    this.getCardTypeIcon(this.cardType);
    console.log('card url: ' + this.imageUrl);
    return isValidCardNumber && accepted;
  }

  validateCVV() {
    var creditCard = this.cardNumber;
    var cvv = this.cvv;
    var acceptedCreditCards = this.acceptedCreditCards;
    creditCard = creditCard.replace(/\D/g, '');
    cvv = cvv.toString().replace(/\D/g, '');
    // american express and cvv is 4 digits
    if ((acceptedCreditCards.amex).test(creditCard)) {
      if((/^\d{4}$/).test(cvv))
        return true;
    } else if ((/^\d{3}$/).test(cvv)) { // other card & cvv is 3 digits
      return true;
    }
    return false;
  }

  getCardTypeIcon(type: String) {
    if (type === 'visa') {
      this.imageUrl = 'assets/imgs/visa-logo-preview.png';
    }
    else if (type === 'mastercard') {
      this.imageUrl = 'assets/imgs/master_card logo.png';
    }
    else if (type === 'amex') {
      this.imageUrl = 'assets/imgs/American-Express-Logo.png';
    }
    else if (type === 'discover') {
      this.imageUrl = 'assets/imgs/discover.png';
    }
    else if (type === 'diners_club') {
      this.imageUrl = 'assets/imgs/diners_club.png';
    }
    else {
      this.imageUrl = '';
    }
  }

  payButton() {
    var validCardNumber = this.checkSupported();
    var validCVV = this.validateCVV();

    if (!validCVV) {
      const toast = this.toastCtrl.create({
        message: 'Please enter a valid CVV Number',
        duration: 3000,
        position: 'bottom',
        showCloseButton: true
      }).then(alert => {
        alert.present();
      });

      // toast.present();
    }

    if (!validCardNumber) {
      const toast = this.toastCtrl.create({
        message: 'Please enter a valid Card Number',
        duration: 3000,
        position: 'bottom',
        showCloseButton: true
      }).then(alert => {
        alert.present();
      });

      // await toast.present();
    }

    if (validCardNumber && validCVV) {
      this.cardDetails = {
        cardName: this.cardName,
        cardNumber: Number(this.cardNumber),
        cardType: this.cardType,
        cvv: Number(this.cvv),
        month: this.month
      };

      let navigationExtras: NavigationExtras = {
        state: {
          cardDetails: this.cardDetails,
          journeyDetails: this.journeyDetails,
          passengerDetails: this.passengerDetails
        }
      };

      this.router.navigate(['view-payment'], navigationExtras);

      // this.NavCtrl.push(ViewPaymentPage, {
      //   cardDetails: this.cardDetails,
      //   journeyDetails: this.journeyDetails,
      //   passengerDetails: this.passengerDetails
      // });
    }


  }

  setPaymentTime() {
    var date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();

    hours += 1;

    if (hours > 24) {
      hours -= 24;
    }
    this.hours = hours;
    var newTime = new Date().setHours(this.hours);
    this.payDate = new Date(newTime);

  }

  setMinimum() {
    var year = new Date().getFullYear().toString();
    var month = new Date().getMonth().toString();
    var date = new Date().getDate();
    var strDate = "";

    if (date < 10) {
      strDate = "0" + date;
    }
    else {
      strDate = date + "";
    }

    // this.minimum = year + "-" + month + "-" + strDate;
    // this.month = this.minimum;
    var min = (year + "-" + month + "-" + strDate).toString();

    this.minimum = "" + year + "-" + month + "-" + strDate + "";

  }

  goBack() {
    this.router.navigate(['paymnet1']);
  }


}
