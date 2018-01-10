import { MedicosComponent } from './medicos/medicos.component';
import { HospitalesComponent } from './hospitales/hospitales.component';

import { Routes, RouterModule } from '@angular/router';
import { RxjsComponent } from './rxjs/rxjs.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingdComponent } from './account-settingd/account-settingd.component';
import { PromesasComponent } from './promesas/promesas.component';
import { LoginGuardGuard } from './../services/services.index';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MedicoComponent } from './medicos/medico.component';




const pageRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuardGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard'} },
      { path: 'progress', component: ProgessComponent, data: { titulo: 'ProgressBars'} },
      { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas'} },
      { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas'} },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Rxjs'} },
      { path: 'account-settings', component: AccountSettingdComponent, data: { titulo: 'Ajustes'} },
      { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario'} },
      //Mantenimiento
      { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Mantenimiento de usuarios'} },
      { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de hospitales'} },
      { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de medicos'} },
      { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizar de medico'} },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pageRoutes);
