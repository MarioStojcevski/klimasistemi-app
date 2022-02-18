import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable, Subscription } from 'rxjs';
import { FilterDto } from 'src/app/model/filter.dto';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AirConditionerService } from 'src/app/service/air-conditioner.service';
import { Output, EventEmitter } from '@angular/core';
import { IAirConditioner } from 'src/app/model/air-conditioner';

@Component({
  selector: 'app-filter-and-sort',
  templateUrl: './filter-and-sort.component.html',
  styleUrls: ['./filter-and-sort.component.scss']
})
export class FilterAndSortComponent implements OnInit {

  @Output() airConditionersFiltered = new EventEmitter<IAirConditioner[]>();

  public mediaSub!: Subscription;
  public deviceSmXs: boolean = false;
  public filterDto: FilterDto;
  public filterForm: FormGroup = new FormGroup({});
  public minValue = 15000;
  public maxValue = 50000;
  checkboxData: Array<any> = [
    { name: '2.5 kW', value: '2.5' },
    { name: '3.5 kW', value: '3.5' },
    { name: '5.5 kW', value: '5.5' },
    { name: '7.0 kW', value: '7.0'},
    { name: '8.0 kW', value: '8.0' },
    { name: '10.0 kW', value: '10.0' },
    { name: '12.0 kW', value: '12.0' },
    { name: '15.0 kW', value: '15.0' }
  ];

  constructor(
    public fb: FormBuilder,
    private airConditionerService: AirConditionerService,
    public mediaObserver: MediaObserver) {
    this.filterDto = {
      sortBy: '',
      minPrice: 15000,
      maxPrice: 50000,
      powerArray: []
    };
  }

  ngOnInit(): void {
    this.initFilterForm();
    this.setDeviceSize();
  }

  private initFilterForm(): void {
    this.filterForm = this.fb.group({
      sortByControl: [''],
      minPriceControl: new FormControl(this.minValue),
      maxPriceControl: new FormControl(this.maxValue),
      powerArrayControl: this.fb.array([])
    });
  }

  private setDeviceSize(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      ((result) => {
        this.deviceSmXs = result.mqAlias === 'sm' || result.mqAlias === 'xs' ? true : false;
    }));
  }

  public onCheckboxChange(e: any): void {
    const powerArray: FormArray = this.filterForm.get('powerArrayControl') as FormArray;
    if (e.checked) {
      powerArray.push(new FormControl(e.source.value));
    } 
    else {
      for(let i=0; i<powerArray.controls.length; i++) {
        if(powerArray.controls[i].value == e.source.value) {
          powerArray.removeAt(i);
        }
      }
    }
  }

  public filter(): void {
    let unFormattedPowerArray: string[] = this.filterForm.get('powerArrayControl')?.value;
    let formattedPowerArray: number[] = unFormattedPowerArray.map(x => +x*1000);

    this.filterDto = {
      sortBy: this.filterForm.get('sortByControl')?.value,
      minPrice: this.filterForm.get('minPriceControl')?.value,
      maxPrice: this.filterForm.get('maxPriceControl')?.value,
      powerArray: formattedPowerArray,
    };

    this.airConditionerService.getAllAirConditionersFiltered(this.filterDto)
      .subscribe((result) => {
        this.airConditionersFiltered.emit(result.data.airConditioners);
      }, (error) => {
        console.log(error);
      });
  }

}
