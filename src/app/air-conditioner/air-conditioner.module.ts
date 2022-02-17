import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirConditionersComponent } from './air-conditioners/air-conditioners.component';
import { DetailsComponent } from './details/details.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AirConditionerRoutingModule } from './air-conditioner-routing.module';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FilterAndSortComponent } from './filter-and-sort/filter-and-sort.component';
import { OrderComponent } from './order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FilterAndSortComponent,
    DetailsComponent,
    AirConditionersComponent,
    OrderComponent,
  ],
  imports: [
    CommonModule,
    AirConditionerRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    NgxSliderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AirConditionerRoutingModule
  ]
})
export class AirConditionerModule { }
