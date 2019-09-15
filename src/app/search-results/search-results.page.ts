import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.page.html',
  styleUrls: ['./search-results.page.scss'],
})
export class SearchResultsPage implements OnInit {

  selectted_bus_details;

  constructor(private _http: HttpClient, private route: Router) { }

  ngOnInit() {
    this._http.get('/assets/suggestions.json').subscribe(data => {
      this.selectted_bus_details = data;
    });
  }

  bookSeats() {
    this.route.navigate(['home']);
  }

  goBack() {
    this.route.navigate(['search-for-busses']);
  }

}
