import { Component, OnInit } from '@angular/core';
import { IAirConditioner } from 'src/app/model/air-conditioner';
import { ActivatedRoute } from '@angular/router';
import { AirConditionerService } from 'src/app/service/air-conditioner.service';
import { AirConditionerResponse } from 'src/app/model/response';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public ac!: IAirConditioner;

  constructor(
    private activatedRoute: ActivatedRoute,
    private airConditionerService: AirConditionerService
  ) { }

  ngOnInit(): void {
    this.loadAirConditioner();
  }

  loadAirConditioner(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.airConditionerService.getAirConditionerById(id)
      .subscribe((airConditionerResponse: any) => {
        console.log(airConditionerResponse);
        this.ac = airConditionerResponse.data.airConditioner;
      })
  }

}
