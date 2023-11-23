import { Component } from '@angular/core';
import { Flight } from './models/flight';
import { Room } from './models/room';

@Component({
  selector: 'bp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'booking-process';
  Flight:Flight={
    destinationId:'',
    from: new Date(),
    to:new Date(),
    cityOrigin:'',
    cityDestination:'',
    countryDestination:'',
    duration:'',
    companyName:'',
    companyLogo:'',
    price: 0
  };
    Room: Room={
      destinationId: '',
      hotel: '',
      type: '',
      reviews: 0,
      amenities:[],
      description: '',
      photo: '',
      price: 0,
      booked: false
    }
  seeRooms:Boolean=false;
  seeFligths:Boolean=true;
  seeRerverve:Boolean=false;
  onOpenFlights() {
    // TODO logic to show flight list component
  }

  reciveFligth(flight:Flight){
    this.Flight=flight;
    this.seeFligths=false;
    this.seeRooms=true;
  }
  reciveRoom(room:Room){
    this.Room=room;
    this.seeFligths=false;
    this.seeRooms=false;
    this.seeRerverve=true;
  }
  reciveConfrimation(Boolean:boolean){
    if(Boolean){
      alert('Reserva exitosa! Se pago: $'+ (this.Flight.price+this.Room.price));
      this.seeFligths=true;
      this.seeRooms=false;
      this.seeRerverve=false;
    }
  }
}
