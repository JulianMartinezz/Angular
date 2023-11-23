import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent {
  resultButton:number=0;

  value1:number=0;
  value2:number=0;

  onEnviarValor1(event:any){
    this.value1=event.target.value;
  }
  onEnviarValor2(event:any){
    this.value2=event.target.value;
  }
  
  onReciveResult(value:number){
    this.resultButton=value;
    this.value1=0;
    this.value2=0;
  }
  onClearScreen(condicion:boolean){
    if(condicion==true){
      this.value1=0;
      this.value2=0;
      this.resultButton=0;
    }
  }
}
