import { Component } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-price-slider',
  template: `<ngx-slider [(value)]="minValue" [(highValue)]="maxValue" [options]="options"></ngx-slider>`,
})
export class PriceSliderComponent {
  minValue: number = 15000;
  maxValue: number = 50000;
  options: Options = {
    floor: 0,
    ceil: 200000,
    step: 5000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b>' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + 'MKD';
        case LabelType.High:
          return '<b>Max price:</b>' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + 'MKD';
        default:
          return '';
      }
    }
  };
}