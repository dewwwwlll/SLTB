import { Component, OnInit } from '@angular/core';
import {FeedbackDTo} from "../feedback.d.to";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rating-page',
  templateUrl: './rating-page.page.html',
  styleUrls: ['./rating-page.page.scss'],
})
export class RatingPagePage implements OnInit {
  rate: number;
  comments;
  feedbackArray: FeedbackDTo[] = [];
  blank: boolean;

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    this.feedbackArray.push(new FeedbackDTo(4, "Does a good job of giving me several options for routes to the destination, " +
        "each marked with info like \"shortest\", \"cheapest\", \"least amount of walking\" which is a nice idea," +
        " the walking paths are not correct most of the time, drawing straight lines from bus stop to destinations. " +
        "The app gets the job done and gets out of the way, which is great."));
  }

  onSubmit() {
    if(this.rate === undefined || this.rate === null){
      this.blank = true;
    } else {
      this.blank = false;
      this.feedbackArray.push(new FeedbackDTo(this.rate, this.comments));
      this.rate = null;
      this.comments = null;
    }
  }
  goBack() {
    this.route.navigate(['search-for-busses']);
  }
}
