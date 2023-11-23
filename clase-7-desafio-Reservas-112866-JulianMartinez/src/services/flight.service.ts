import { Injectable } from "@angular/core";
import { FLIGHT_LIST } from "src/app/data/flight-data";
import { Flight } from "src/app/models/flight";

@Injectable(
    {providedIn:'root'}
)
export class FlightService{
    flightsList:Flight[]=FLIGHT_LIST;

    ObtenerVuelos():Flight[]{
        return this.flightsList;
    }
    
}