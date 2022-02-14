import { HttpStatusCode } from "@angular/common/http";
import { IAirConditioner } from "./air-conditioner";
import { IAirConditionerBrand } from "./air-conditioner-brand";

export interface Response {
    timeStamp: Date;
    statusCode: number;
    status: HttpStatusCode;
    reason?: string;
    message: string;
    size?: number;
    developerMessage: string;
}

export interface AirConditionerResponse extends Response {
    data: {
        airConditioners: IAirConditioner[];
    }
}

export interface AirConditionerBrandResponse extends Response {
    data: {
        brands: IAirConditionerBrand[];
    }
}