import { Component, EventEmitter, Output } from '@angular/core';
import { Pedido } from 'src/models/pedido.models';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class POSComponent {
  nombre: string="";
  descripcion: string="";
  numero: number=0;
  @Output() PedidoSend= new EventEmitter<Pedido>();

  onOrdenar(nom:string,desc:string){
    this.PedidoSend.emit(new Pedido(this.numero,nom,desc));
    this.numero++;
  }
  onCompletarNombre(event:any){
    this.nombre=event.target.value;
  }
  onCompletarDesc(event:any){
    this.descripcion=event.target.value;
  }
}
