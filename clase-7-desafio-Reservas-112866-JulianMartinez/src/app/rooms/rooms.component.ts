import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RoomService } from 'src/services/room.service';
import { Room } from '../models/room';

@Component({
  selector: 'bp-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  roomsList:any[]=[];
  @Output() sendRoom:EventEmitter<Room>= new EventEmitter();

  constructor(private _roomService: RoomService) { }

  ngOnInit(): void {
    this.roomsList=this._roomService.obtenerRooms();
  }

  onSendRoom(room:Room){
    this.sendRoom.emit(room);
  }
}
