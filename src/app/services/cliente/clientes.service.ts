import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../../models/documentosCliente';

@Injectable()
export class ClientesService {

  cliente: Cliente;

  constructor(public http: HttpClient,) { }


  cargarClientes() {

    let url = 'http://localhost:53493/testX.svc/clientes';

    return this.http.get( url )
              .map( (resp: any) => {
              console.log(resp);
              //  this.totalMedicos = resp.totalMedico;
                //return resp.medicos;
              });

  }
}
