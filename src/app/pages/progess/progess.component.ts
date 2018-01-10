import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progess',
  templateUrl: './progess.component.html',
  styles: []
})
export class ProgessComponent implements OnInit {

  porcentaje: number = 50;
  porcentaje2: number = 22;
    
  constructor() { }

  ngOnInit() {
  }
   
  
}
