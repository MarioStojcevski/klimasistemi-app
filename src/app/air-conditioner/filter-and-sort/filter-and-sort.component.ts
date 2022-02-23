import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { FilterDto } from 'src/app/model/helper/filter.dto';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AirConditionerService } from 'src/app/service/air-conditioner.service';
import { Output, EventEmitter } from '@angular/core';
import { IAirConditioner } from 'src/app/model/air-conditioner';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { IAirConditionerBrand } from 'src/app/model/air-conditioner-brand';

@Component({
  selector: 'app-filter-and-sort',
  templateUrl: './filter-and-sort.component.html',
  styleUrls: ['./filter-and-sort.component.scss']
})
export class FilterAndSortComponent implements OnInit {

  @Output() airConditionersFiltered = new EventEmitter<IAirConditioner[]>();
  @Output() size = new EventEmitter<number>();

  public airConditionerBrands: IAirConditionerBrand[] = [];
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
    private translate: TranslateService,
    public mediaObserver: MediaObserver) {
    this.filterDto = {
      sortBy: '',
      minPrice: 15000,
      maxPrice: 50000,
      powerArray: [],
      filterByBrand: ""
    };
  }

  ngOnInit(): void {
    this.getAllBrands();
    this.initFilterForm();
    this.setDeviceSize();
  }

  private getAllBrands(): void {
    this.airConditionerService.getAllBrands()
      .subscribe((brands) => {
        this.airConditionerBrands = brands.data.brands;
      });
  }

  private initFilterForm(): void {
    this.filterForm = this.fb.group({
      sortByControl: [''],
      minPriceControl: new FormControl(this.minValue),
      maxPriceControl: new FormControl(this.maxValue),
      powerArrayControl: this.fb.array([]),
      filterByBrandControl: [null]
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
      filterByBrand: this.filterForm.get('filterByBrandControl')?.value !== undefined ?
                     this.filterForm.get('filterByBrandControl')?.value : null
    };

    console.log(this.filterDto);

    if(this.filterDto.maxPrice - this.filterDto.minPrice > 0) {
      this.airConditionerService.getAllAirConditionersFiltered(this.filterDto)
      .subscribe((result) => {
        this.airConditionersFiltered.emit(result.data.airConditioners);
        this.size.emit(result.size);
      }, (error) => {
        console.log(error);
      });
    } else {
      Swal.fire({
        titleText: this.translate.instant("APP.SWAL.TITLES.ERROR"),
        text: this.translate.instant("APP.SWAL.MESSAGES.MAX_MIN_PRICE"),
        icon: "error",
        confirmButtonText: this.translate.instant("APP.SWAL.BUTTONS.OK"),
        confirmButtonColor: "#E91E63"
      })
    }

    
  }

}
