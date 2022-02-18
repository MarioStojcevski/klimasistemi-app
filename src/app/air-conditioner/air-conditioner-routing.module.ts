import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirConditionersComponent } from './air-conditioners/air-conditioners.component';
import { DetailsComponent } from './details/details.component';
import { OrderComponent } from './order/order.component';

const ROUTES: Routes = [
  { path: 'air-conditioners', component: AirConditionersComponent },
  { path: 'air-conditioners/:id', component: DetailsComponent },
  { path: 'air-conditioners/order/:id', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AirConditionerRoutingModule { }
