import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-terms-and-constions',
  templateUrl: './terms-and-constions.page.html',
  styleUrls: ['./terms-and-constions.page.scss'],
})
export class TermsAndConstionsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['search-for-busses']);
  }

}
