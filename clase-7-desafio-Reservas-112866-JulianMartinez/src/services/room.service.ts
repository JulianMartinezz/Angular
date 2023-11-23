import { Injectable } from "@angular/core";
import { ROOM_LIST } from "src/app/data/room-data";
import { Room } from "src/app/models/room";

@Injectable(
    {providedIn:'root'}
)
export class RoomService{
    roomList:Room[]=ROOM_LIST;

    obtenerRooms():Room[]{
        return this.roomList;
    }
}