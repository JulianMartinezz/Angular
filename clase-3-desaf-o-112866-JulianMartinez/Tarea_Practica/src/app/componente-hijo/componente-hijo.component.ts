import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent{
  @Input() valueInput1:number=0;
  @Input() valueInput2:number=0;
  @Output() resultSend = new EventEmitter<number>();
  @Output() clearSend = new EventEmitter<boolean>();
  @Output() clearSendAll = new EventEmitter<boolean>();

  onAddition(){
    this.resultSend.emit(parseInt(this.valueInput1.toString()) + parseInt(this.valueInput2.toString()));
  }
  onSubtraction(){
    this.resultSend.emit(this.valueInput1-this.valueInput2);
    this.onClear(true);
  }
  onMultiplation(){
    this.resultSend.emit(this.valueInput1*this.valueInput2);
    this.onClear(true);
  }
  onDivision(){
    if(this.valueInput2==0){
      alert("No es posible dividir el numero por 0")
      this.onClear(false);
      return;
    }
    this.resultSend.emit(this.valueInput1/this.valueInput2);
    this.onClear(true);
  }
  onPow(){
    this.resultSend.emit(Math.pow(this.valueInput1,this.valueInput2));
    this.onClear(true);
  }
  onClear(bool:boolean){
    this.clearSend.emit(bool);
  }
  onClearAll(){
    this.clearSendAll.emit(true);
  }
}
