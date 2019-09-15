import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'search-for-busses', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'search-results', loadChildren: './search-results/search-results.module#SearchResultsPageModule' },
  { path: 'search-for-busses', loadChildren: './search-for-busses/search-for-busses.module#SearchForBussesPageModule' },
  { path: 'paymnet1', loadChildren: './paymnet1/paymnet1.module#Paymnet1PageModule' },
  { path: 'card-details', loadChildren: './card-details/card-details.module#CardDetailsPageModule' },
  { path: 'view-payment', loadChildren: './view-paymeny/view-paymeny.module#ViewPaymenyPageModule' },
  { path: 'view-modal', loadChildren: './view-modal/view-modal.module#ViewModalPageModule' },
  { path: 'terms-and-conditions', loadChildren: './terms-and-constions/terms-and-constions.module#TermsAndConstionsPageModule' },  { path: 'rating-page', loadChildren: './rating-page/rating-page.module#RatingPagePageModule' },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
