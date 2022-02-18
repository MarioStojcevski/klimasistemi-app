import { Component, OnDestroy, OnInit } from '@angular/core';
import { IAirConditioner } from 'src/app/model/air-conditioner';
import { AirConditionerService } from 'src/app/service/air-conditioner.service';
import { MediaObserver } from '@angular/flex-layout';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-air-conditioners',
  templateUrl: './air-conditioners.component.html',
  styleUrls: ['./air-conditioners.component.scss']
})
export class AirConditionersComponent implements OnInit, OnDestroy {

  public airConditioners: IAirConditioner[] = [];
  public mediaSub!: Subscription;
  public deviceSmXs: boolean = false;
  
  constructor(
    public mediaObserver: MediaObserver,
    private airConditionerService: AirConditionerService) { }

  ngOnInit(): void {
    this.getAirConditionersSorted('price');
    this.mediaSub = this.mediaObserver.media$.subscribe(
      ((result) => {
        this.deviceSmXs = result.mqAlias === 'sm' || result.mqAlias === 'xs' ? true : false;
    }));
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

  getFiltered(filteredAirConditioners: IAirConditioner[]): void {
    this.airConditioners = filteredAirConditioners;
  }

  public getAirConditionersSorted(field: string): void {
    this.airConditionerService.getAllAirConditionersSorted(field)
      .subscribe((result) => {
        this.airConditioners = result.data.airConditioners;
      })
  }

}
