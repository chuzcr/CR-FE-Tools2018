import { ContactoCliente } from './../../models/contactoCliente';
import { Router } from '@angular/router';
import { Usuario } from './../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { URL_SERVICIOS } from '../../config/config';

import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';

@Injectable()
export class UsuarioService {
  
  usuario: Usuario;
  token: string;

  myBooks: any [];
  clientes: ContactoCliente [];

  constructor(public http: HttpClient,
    public _http: Http,
              public router: Router,
              public _subirArchivoService: SubirArchivoService) { 
    this.cargarStorage();
    this.cargarClientes();

    
  }

  /*cargarClientes() {
    console.log('resp');
    let url = 'http://localhost:53493/testX.svc/clientes';

    this.http.get( url )
              .map( (resp: any) => {
              console.log(resp);
              //  this.totalMedicos = resp.totalMedico;
                //return resp.medicos;
              });
              console.log('asd');  
  }*/

   cargarClientes() {
    console.log('resp');
//funca las dos formas
   // this.http.get('http://localhost:60085/api/Books').subscribe(
   /*    this.http.get('http://localhost:53493/testX.svc/clientes').subscribe(
       (data) => {
        this.clientes = data as string [];
        console.log(this.clientes[0].ccodigocli);
       }); */


       return this.http.get('http://localhost:53493/testX.svc/cliente')
       .map((resp: ContactoCliente) => resp );
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
  estaLogueado() {
    return (this.token.length > 5) ? true : false ;
  }

  cargarStorage() {
    if ( localStorage.getItem('token')) {
        this.token = localStorage.getItem('token');
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
    }else {
      this.token = ' ';
      this.usuario = null;
    }
  }
  
  guardarStorage( id: string, token: string, usuario: Usuario/* , menu: any */ ) {

    localStorage.setItem('id', id );
    localStorage.setItem('token', token );
    localStorage.setItem('usuario', JSON.stringify(usuario) );
   //localStorage.setItem('menu', JSON.stringify(menu) );

    this.usuario = usuario;
    this.token = token;
    //this.menu = menu;
  }
  logout() {
    this.usuario = null;
    this.token = '';
    //this.menu = [];

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    // localStorage.removeItem('menu');

    this.router.navigate(['/login']);
  }

  login(usuario: Usuario, recordar: boolean = false) {

    if ( recordar) {
      localStorage.setItem('email', usuario.email);
    }else {
      localStorage.removeItem('email');
    }

    let url = URL_SERVICIOS + '/login';
    return this.http.post(url, usuario)
               .map((resp: any) => {
                this.guardarStorage( resp.id, resp.token, resp.usuario/* , resp.menu  */);
                return true;
               }).catch( err => {

                 swal( 'Error en el login', err.error.mensaje, 'error' );
                 return Observable.throw( err );
               });
  }

  loginGoogle( token: string ) {

    let url = URL_SERVICIOS + '/login/google';

    return this.http.post( url, { token } )
                .map( (resp: any) => {
                  this.guardarStorage( resp.id, resp.token, resp.usuario/* , resp.menu  */);
                  return true;
                });


  }

  crearUsuario(usuario: Usuario) {
    let url = URL_SERVICIOS + '/usuario';

    return this.http.post(url, usuario)
            .map( (resp: any) => {
              swal('Usuario creado', usuario.email, 'success');
               return resp.usuario;
            });
  }

  actualizarUsuario(usuario: Usuario) {
    this.cargarClientes();
    let url = URL_SERVICIOS + '/usuario/' + usuario._id;
    url += '?token=' + this.token;

    return this.http.put( url, usuario)
               .map( (resp: any) => {
                if ( usuario._id === this.usuario._id ) {
                  let usuarioDB: Usuario = resp.usuario;
                  this.guardarStorage( usuarioDB._id, this.token, usuarioDB/* , this.menu */ );
                }

                swal('Usuario actualizado', usuario.nombre, 'success' );

                return true;
              })
              .catch( err => {
                swal( err.error.mensaje, err.error.errors.message, 'error' );
                return Observable.throw( err );
              });
              
  }
   
  cambiarImagen( archivo: File, id: string ) {

    this._subirArchivoService.subirArchivo( archivo, 'usuarios', id )
          .then( (resp: any) => {

            this.usuario.img = resp.usuario.img;
            swal( 'Imagen Actualizada', this.usuario.nombre, 'success' );
            this.guardarStorage( id, this.token, this.usuario/* , this.menu*/  ); 
          })
          .catch( resp => {
            console.log( resp );
          }) ;

  } 

  cargarUsuarios( desde: number = 0 ) {

    let url = URL_SERVICIOS + '/usuario?desde=' + desde;
    return this.http.get( url );

  }

  buscarUsuarios( termino: string ) {

    let url = URL_SERVICIOS + '/busqueda/coleccion/usuarios/' + termino;
    return this.http.get( url )
                .map( (resp: any) => resp.usuarios );

  }

  borrarUsuario( id: string ) {

    let url = URL_SERVICIOS + '/usuario/' + id;
    url += '?token=' + this.token;

    return this.http.delete( url )
                .map( resp => {
                  swal('Usuario borrado', 'El usuario a sido eliminado correctamente', 'success');
                  return true;
                });

  }
}
