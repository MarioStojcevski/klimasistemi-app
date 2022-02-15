import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirConditionersComponent } from './air-conditioners/air-conditioners.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: AirConditionersComponent },
  { path: ':id', component: DetailsComponent },
  { path: 'order/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirConditionerRoutingModule { }
