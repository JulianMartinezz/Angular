import { Flight } from "./flight";
import { Room } from "./room";

export interface Pay{
    FirstName:string;
    LastName:String;
    IdentificationType:string;
    IdentificationNumber:number;
    Address:string;
    Strate:string;
    City:string;
    PayType:string;
    NameOnCard:string;
    CreditCardNumber:number;
    Expiration:string;
    Cvv:number;
}