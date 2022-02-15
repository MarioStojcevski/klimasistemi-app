import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirConditionersComponent } from './air-conditioners/air-conditioners.component';
import { DetailsComponent } from './details/details.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AirConditionerRoutingModule } from './air-conditioner-routing.module';


@NgModule({
  declarations: [
    AirConditionersComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AirConditionerRoutingModule
  ],
  exports: [
    AirConditionersComponent,
    DetailsComponent
  ]
})
export class AirConditionerModule { }
