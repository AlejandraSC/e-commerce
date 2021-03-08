import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartViewComponent } from './views/cart-view/cart-view.component';
import { SummaryViewComponent } from './views/summary-view/summary-view.component';

const routes: Routes = [
  {path: 'cartView', component: CartViewComponent},
  {path: 'summaryView', component: SummaryViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
        