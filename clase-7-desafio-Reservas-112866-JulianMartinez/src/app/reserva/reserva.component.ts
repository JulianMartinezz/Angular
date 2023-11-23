import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Flight } from '../models/flight';
import { Room } from '../models/room';
import { Pay } from '../models/pay';

@Component({
  selector: 'bp-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  @Input() flight: any;
  @Input() room: any;
  @Output() sendConfirmation: EventEmitter<boolean>=new EventEmitter();
  Pay:Pay={
    FirstName:'',
    LastName:'',
    IdentificationType:'',
    IdentificationNumber:0,
    Address:'',
    Strate:'',
    City:'',
    PayType:'',
    NameOnCard:'',
    CreditCardNumber:0,
    Expiration:'',
    Cvv:0,
  }

  constructor() { }

  ngOnInit(): void {
  }
  crearReserva(){
    this.sendConfirmation.emit(true);
  }
}
