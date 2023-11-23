import { Component, Input } from '@angular/core';
import { Pedido } from 'src/models/pedido.models';

@Component({
  selector: 'app-poe',
  templateUrl: './poe.component.html',
  styleUrls: ['./poe.component.css']
})
export class POEComponent {
  @Input() pedidosTerminados: any;

  onEntregarPedido(index:number){
    this.pedidosTerminados.splice(index);
  }
}
