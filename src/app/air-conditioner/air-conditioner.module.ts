import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirConditionerRoutingModule } from './air-conditioner-routing.module';
import { AirConditionersComponent } from './air-conditioners/air-conditioners.component';
import { DetailsComponent } from './details/details.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    AirConditionersComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    AirConditionerRoutingModule,
  ],
  exports: [
    AirConditionersComponent,
    DetailsComponent
  ]
})
export class AirConditionerModule { }
