import { Routes, RouterModule } from '@angular/router';
import { RxjsComponent } from './rxjs/rxjs.component';

//Se importa LoginGuard, la cual evita que cualquier persona que no este logueada en el sistema
//ingrese a alguna ruta de las que se enceuntran aca establecidas
/// <summary>
/// 
/// </summary>
/// <param name="name"></param>
/// <returns></returns>

import { LoginGuardGuard, AdminGuard } from './../services/services.index';

//Componentes pages para la navegacion
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingdComponent } from './account-settingd/account-settingd.component';
import { PromesasComponent } from './promesas/promesas.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MedicoComponent } from './medicos/medico.component';
import { ClienteComponent } from './cliente/cliente.component';
import { MedicosComponent } from './medicos/medicos.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { VerficaTokenGuard } from '../services/guards/verifica-token.guard';




const pageRoutes: Routes = [
      { 
            path: 'dashboard', 
            component: DashboardComponent, 
            canActivate: [VerficaTokenGuard],
            data: { titulo: 'Dashboard'} },
      { path: 'progress', component: ProgessComponent, data: { titulo: 'ProgressBars'} },
      { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas'} },
      { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas'} },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Rxjs'} },
      { path: 'account-settings', component: AccountSettingdComponent, data: { titulo: 'Ajustes'} },
      { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario'} },
      { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador'} },
      //Mantenimiento
      {
         path: 'usuarios', 
         component: UsuariosComponent, 
         canActivate: [AdminGuard],
         data: { titulo: 'Mantenimiento de usuarios'} 
      },
      { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de hospitales'} },
      { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de medicos'} },
      { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizar de medico'} },
      { path: 'clientes', component: ClienteComponent, data: { titulo: 'Mantenimiento de clientes'} },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

export const PAGES_ROUTES = RouterModule.forChild(pageRoutes);
