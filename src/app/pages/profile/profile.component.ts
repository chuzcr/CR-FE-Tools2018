import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/services.index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  
  imagenSubir: File;
  imagenTemp: string;
  usuario: Usuario;

  constructor(public _usuarioService: UsuarioService) { 
    this.usuario = _usuarioService.usuario;
  }

  ngOnInit() {
  }

  guardar(usuario: Usuario) {
    this.usuario.nombre = usuario.nombre;
    if (!this.usuario.google) {
      this.usuario.email = usuario.email;
    }
    
  
  this._usuarioService.actualizarUsuario(this.usuario)
      .subscribe();
  }

  seleccionImagen( archivo: File ) {

    if ( !archivo ) {
      this.imagenSubir = null;
      return;
    }

    if ( archivo.type.indexOf('image') < 0 ) {
      swal('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL( archivo );

    reader.onloadend = () => this.imagenTemp = reader.result;
   // console.log(archivo); se pasa en html el $event.target.files[0] para agarrar el campo directamente
  }

  
  cambiarImagen() {

    this._usuarioService.cambiarImagen( this.imagenSubir, this.usuario._id);
  }
}
