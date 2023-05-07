import { Component, OnDestroy, OnInit } from '@angular/core';
import { IAirConditioner } from 'src/app/model/air-conditioner';
import { AirConditionerService } from 'src/app/service/air-conditioner.service';
import { MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { environment } from "../../../environments/environment.prod";

@Component({
  selector: 'app-air-conditioners',
  templateUrl: './air-conditioners.component.html',
  styleUrls: ['./air-conditioners.component.scss']
})
export class AirConditionersComponent implements OnInit, OnDestroy {

  public airConditioners: IAirConditioner[] = [];
  public noAirConditioners: boolean = false;
  public mediaSub!: Subscription;
  public deviceSmXs: boolean = false;
  public productionEnvironment = environment;

  constructor(
    public mediaObserver: MediaObserver,
    private airConditionerService: AirConditionerService) { }

  ngOnInit(): void {
    this.getAirConditionersSorted('price');
    this.mediaSub = this.mediaObserver.media$.subscribe(
      ((result) => {
        this.deviceSmXs = result.mqAlias === 'sm' || result.mqAlias === 'xs';
    }));
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

  getFiltered(filteredAirConditioners: IAirConditioner[]): void {
    this.airConditioners = filteredAirConditioners;
  }

  getSize(size: number) {
    this.noAirConditioners = size == 0;
  }

  public getAirConditionersSorted(field: string): void {
    this.airConditionerService.getAllAirConditionersSorted(field)
      .subscribe((result) => {
        console.log(result.data.airConditioners);
        this.airConditioners = result.data.airConditioners;
      })
  }

}
