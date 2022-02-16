import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AirConditionerBrandResponse, AirConditionerResponse } from '../model/response';
import { IAirConditioner } from '../model/air-conditioner';


@Injectable({
  providedIn: 'root'
})
export class AirConditionerService {

  private readonly baseURL: string = environment.baseURL;

  constructor(private http: HttpClient) { }

  getAirConditionerById(id: number): Observable<AirConditionerResponse> {
    return this.http.get<AirConditionerResponse>(`${this.baseURL}/airConditioners/${id}`);
  }

  getAirConditionerByModelName(modelName: string): Observable<AirConditionerResponse> {
    return this.http.get<AirConditionerResponse>(`${this.baseURL}/airConditioners/getByModelName/${modelName}`);
  }


  getAllAirConditioners(): Observable<AirConditionerResponse> {
    return this.http.get<AirConditionerResponse>(`${this.baseURL}/airConditioners/list`);
  }

  getAllAirConditionersSorted(field: string): Observable<AirConditionerResponse> {
    return this.http.get<AirConditionerResponse>(`${this.baseURL}/airConditioners/allSorted/${field}`);
  }

  getAllBrands(): Observable<AirConditionerBrandResponse> {
    return this.http.get<AirConditionerBrandResponse>(`${this.baseURL}/airConditioners/listBrands`);
  }
}
