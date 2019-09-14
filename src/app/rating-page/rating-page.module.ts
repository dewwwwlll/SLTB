import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RatingPagePage } from './rating-page.page';
import {IonicRatingModule} from 'ionic4-rating/dist';
import {FeedbackContentComponent} from './feedback-content/feedback-content.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

const routes: Routes = [
  {
    path: '',
    component: RatingPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    IonicRatingModule, // Put ionic-rating module here
    RouterModule.forChild(routes)
  ],
  declarations: [RatingPagePage, FeedbackContentComponent]
})
export class RatingPagePageModule {}
