import { Component, Output } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-price-slider',
  templateUrl: 'price-slider.component.html',
})
export class PriceSliderComponent {

  minValue: number = 15000;
  maxValue: number = 50000;

  @Output() private minValueSubject = new BehaviorSubject<number>(this.minValue);
  @Output() private maxValueSubject = new BehaviorSubject<number>(this.maxValue);
  public minValue$ = this.minValueSubject.asObservable();
  public maxValue$ = this.maxValueSubject.asObservable();

  options: Options = {
    floor: 0,
    ceil: 200000,
    step: 5000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + '</b>';
        case LabelType.High:
          return '<b>' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + '</b>';
        default:
          return '';
      }
    }
  };

  emitPrices(min: number, max: number) {
    this.minValueSubject.next(min);
    this.maxValueSubject.next(max);
  }

}