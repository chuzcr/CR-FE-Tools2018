import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto-cliente',
  templateUrl: './contacto-cliente.component.html',
  styles: []
})
export class ContactoClienteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

/* 
  llamaObser() {
    this._usuarioService.cargarClientes( )
    .subscribe( (cliente: ContactoCliente) => {

      this.cliente = cliente;
      console.log( "jajajajaja");
      console.log( this.cliente);
      console.log( this.cliente.ccelular);
    });
  } */

}
