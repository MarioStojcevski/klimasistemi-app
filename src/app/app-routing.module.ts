import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirConditionersComponent } from './air-conditioner/air-conditioners/air-conditioners.component';

const routes: Routes = [
  { path: 'air-conditioners', component: AirConditionersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
