import { Component, OnInit, Output, Input, EventEmitter, ElementRef, ViewChild } from '@angular/core';  

@Component({
  selector: 'app-incrementar',
  templateUrl: './incrementar.component.html',
  styles: []
})
export class IncrementarComponent implements OnInit {


  // tslint:disable-next-line:no-input-rename
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 5;
  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() { 
    
  }

  ngOnInit() {
    
  }
  onChanges(newValue: number) {
 

    if (newValue >= 100) {
      this.porcentaje = 100;
    }else if (newValue <= 0) {
      this.porcentaje = 0;
    }else {
      this.porcentaje = newValue;
    } 
  this.txtProgress.nativeElement.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje);
  }


  cambiarValor(valor: number) {
    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
     return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
     }
   this.porcentaje = this.porcentaje + valor;

   this.cambioValor.emit(this.porcentaje);
   this.txtProgress.nativeElement.focus();
  }


}
