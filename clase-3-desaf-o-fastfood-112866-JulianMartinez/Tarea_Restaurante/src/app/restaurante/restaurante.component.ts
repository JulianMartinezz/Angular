import { Component, Input } from '@angular/core';
import { Pedido } from 'src/models/pedido.models';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent {
  pedidosIngresados: Pedido []=[];
  pedidosCompletados: Pedido []=[];

  onRecivePedido(value:Pedido){
    this.pedidosIngresados.push(value);
  }

  onRecivePedidoCompletado(value:Pedido){
    this.pedidosCompletados.push(value);
  }
}
