import { Component, OnInit } from '@angular/core';
import { IAirConditioner } from 'src/app/model/air-conditioner';
import { AirConditionerService } from 'src/app/service/air-conditioner.service';

@Component({
  selector: 'app-air-conditioners',
  templateUrl: './air-conditioners.component.html',
  styleUrls: ['./air-conditioners.component.scss']
})
export class AirConditionersComponent implements OnInit {

  private size: number = 30;
  public airConditioners: IAirConditioner[] = [];
  
  constructor(private airConditionerService: AirConditionerService) { }

  ngOnInit(): void {
    this.getAirConditionersSorted('price');
  }

  public getAirConditionersSorted(field: string): void {
    this.airConditionerService.getAllAirConditionersSorted(field)
      .subscribe((result) => {
        console.log(result);
        this.airConditioners = result.data.airConditioners;
      })
  }

}
