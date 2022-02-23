import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AirConditionerBrandResponse, AirConditionerResponse } from '../model/helper/response';
import { FilterDto } from '../model/helper/filter.dto';


@Injectable({
  providedIn: 'root'
})
export class AirConditionerService {

  private base_URL: string = environment.baseURL;

  constructor(private http: HttpClient) { }

  getAirConditionerById(id: number): Observable<AirConditionerResponse> {
    return this.http.get<AirConditionerResponse>(`${this.base_URL}/airConditioners/${id}`);
  }

  getAirConditionerByModelName(modelName: string): Observable<AirConditionerResponse> {
    return this.http.get<AirConditionerResponse>(`${this.base_URL}/airConditioners/getByModelName/${modelName}`);
  }

  getAllAirConditioners(): Observable<AirConditionerResponse> {
    return this.http.get<AirConditionerResponse>(`${this.base_URL}/airConditioners/list`);
  }

  getAllAirConditionersSorted(field: string): Observable<AirConditionerResponse> {
    return this.http.get<AirConditionerResponse>(`${this.base_URL}/airConditioners/allSorted/${field}`);
  }

  getAllAirConditionersFiltered(filter: FilterDto): Observable<AirConditionerResponse> {
    return this.http.post<AirConditionerResponse>(`${this.base_URL}/airConditioners/allFiltered`, filter);
  }

  getAllBrands(): Observable<AirConditionerBrandResponse> {
    return this.http.get<AirConditionerBrandResponse>(`${this.base_URL}/brands/listBrands`);
  }
}
