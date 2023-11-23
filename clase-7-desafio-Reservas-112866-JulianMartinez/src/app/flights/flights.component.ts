import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Flight } from '../models/flight';
import { FlightService } from 'src/services/flight.service';

@Component({
  selector: 'bp-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  fligthsList:Flight[]=[];
  @Output() sendFligth:EventEmitter<Flight>= new EventEmitter();
  constructor(private _fligthService: FlightService) { }

  ngOnInit(): void {
    this.fligthsList=this._fligthService.ObtenerVuelos();
  }

  onSendFlight(flight:Flight){
    this.sendFligth.emit(flight);
  }


}
