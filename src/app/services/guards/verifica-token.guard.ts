import { UsuarioService } from './../usuario/usuario.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VerficaTokenGuard implements CanActivate {

  constructor(public _usuarioService: UsuarioService,
              public router: Router  ) {}

  canActivate(): Promise<boolean> | boolean {

    let token = this._usuarioService.token;
    let payload = JSON.parse( atob ( token.split('.')[1])); // atob toma el token y lo descomprime y obtengo los datos
    let expirado = this.expirado( payload.exp);
  
    if (expirado) {
      this.router.navigate(['/login']); // el token expiro se sale del sistema
      return false;
    }

    
    return this.verificaRenueva(payload.exp);
  }
  
 verificaRenueva(fechaExp: number): Promise<boolean> {
    return new Promise ( (resolve, reject) => {

      let tokenExp = new Date( fechaExp * 1000); //xq esta en milisegundos
      let ahora = new Date();

      ahora.setTime( ahora.getTime() + ( 1 * 60 * 60 * 1000));
      
      if ( tokenExp.getTime() > ahora.getTime() ) {
        resolve(true); //no hace nada ya que el token aun le qued tiempo para expirar
      }else {
        //se envia a actualizar el token ya que esta por expirar
        this._usuarioService.renuevaToken()
            .subscribe( () => {
              resolve(true);
            }, () => {
              this.router.navigate(['/login']); // el token expiro se sale del sistema
              reject(false);
            });
      }
      
    });
 }
  expirado(fechaExp: number) {
    let ahora = new Date().getTime() / 1000;

    if ( fechaExp < ahora) {
        return true;
    }else {
      return false;
    }
  }
}
