import { Component, OnInit } from '@angular/core';
import { IAirConditioner } from 'src/app/model/air-conditioner';
import { ActivatedRoute } from '@angular/router';
import { AirConditionerService } from 'src/app/service/air-conditioner.service';
import { MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { environment } from "../../../environments/environment.prod";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public ac!: IAirConditioner;
  public mediaSub!: Subscription;
  public deviceMdSmXs: boolean = false;
  public productionEnvironment = environment;

  constructor(
    private activatedRoute: ActivatedRoute,
    private airConditionerService: AirConditionerService,
    public mediaObserver: MediaObserver
    ) {
  }

  ngOnInit(): void {
    this.loadAirConditioner();
    this.mediaSub = this.mediaObserver.media$.subscribe(
      ((result) => {
        this.deviceMdSmXs = result.mqAlias === 'md' || result.mqAlias === 'sm' || result.mqAlias === 'xs';
    }));
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

  loadAirConditioner(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.airConditionerService.getAirConditionerById(id)
      .subscribe((airConditionerResponse: any) => {
        this.ac = airConditionerResponse.data.airConditioner;
      })
  }

}
