import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../../models/documentosCliente';
import { ContactoCliente } from '../../models/contactoCliente';


///-----------------------------------------------------------------
///   Class:          ClientesServices
///   Description:    Servicio que realiza peticiones ge,put,post y delete al WCF
///   Author:         Javier Sanchez
///   Date:            10/01/2018
///   Version:         1.0
///-----------------------------------------------------------------
@Injectable()
export class ClientesService {
  clientes: ContactoCliente;

  constructor(public http: HttpClient) {}

  cargarClientes() {
    return this.http
      .get('http://localhost:53493/testX.svc/cliente')
      .map((resp: ContactoCliente) => resp);
  }
}
