import { IAirConditionerBrand } from "./air-conditioner-brand";
import { AirConditionerType } from "./air-conditioner-type";

export interface IAirConditioner {
    id:                         number;
    brand:                      IAirConditionerBrand;
    type:                       AirConditionerType;
    modelName:                  string;
    energyClass:                string;
    power:                      number;
    area:                       number;
    price:                      number;
    imageOutdoorURL:            string;
    imageIndoorURL:             string;
    maxCoolingCapacity:         number;
    maxHeatingCapacity:         number;
    averagePower:               number;
    entryCoolingPower:          number;
    entryHeatingPower:          number;
    airFlow:                    number;
    dehumidificationRate:       number;
    noiseLevel:                 number;
    workingTemperatureFrom:     number;
    workingTemperatureTo:       number;
    indoorUnitMass:             number;
    outdoorUnitMass:            number;
    freon:                      string;
    outdoorUnitDimensionsX:     number;
    outdoorUnitDimensionsY:     number;
    outdoorUnitDimensionsZ:     number;
    guarantee:                  number;
}