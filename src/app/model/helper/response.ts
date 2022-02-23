import { HttpStatusCode } from "@angular/common/http";
import { IAirConditioner } from "src/app/model/air-conditioner";
import { IAirConditionerBrand } from "src/app/model/air-conditioner-brand";

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