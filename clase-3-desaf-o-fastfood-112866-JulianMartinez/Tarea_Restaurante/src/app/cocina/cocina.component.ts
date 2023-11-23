import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pedido } from 'src/models/pedido.models';

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.css']
})
export class CocinaComponent {
  @Input() pedidosPendiente: any;
  pedidosCocinados: Pedido[]=[];
  @Output() pedidoTerminado=new EventEmitter<Pedido>();

  onCocinarPedido(value:Pedido){
    this.pedidosCocinados.push(value);
  }

  onTerminarPedido(){
    this.pedidoTerminado.emit(this.pedidosCocinados[0]);
    this.pedidosCocinados.pop();
  }
}
