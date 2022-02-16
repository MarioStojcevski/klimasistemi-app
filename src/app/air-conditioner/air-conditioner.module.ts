import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirConditionersComponent } from './air-conditioners/air-conditioners.component';
import { DetailsComponent } from './details/details.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AirConditionerRoutingModule } from './air-conditioner-routing.module';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { PriceSliderComponent } from './shared/price-slider/price-slider.component';


@NgModule({
  declarations: [
    AirConditionersComponent,
    DetailsComponent,
    PriceSliderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AirConditionerRoutingModule,
    NgxSliderModule
  ],
  exports: [
    AirConditionersComponent,
    DetailsComponent
  ]
})
export class AirConditionerModule { }
