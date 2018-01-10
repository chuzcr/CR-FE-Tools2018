import { GraficoDonaComponent } from './../components/grafico-dona/grafico-dona.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgessComponent } from './progess/progess.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { IncrementarComponent } from '../components/incrementar/incrementar.component';
import { AccountSettingdComponent } from './account-settingd/account-settingd.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
 

@NgModule({
  declarations: [DashboardComponent, ProgessComponent, Graficas1Component,
    PagesComponent, IncrementarComponent, GraficoDonaComponent, AccountSettingdComponent,
     PromesasComponent, RxjsComponent, ProfileComponent, UsuariosComponent, ModalUploadComponent,
      HospitalesComponent, MedicosComponent, MedicoComponent],
  imports: [ SharedModule, PAGES_ROUTES, FormsModule, ChartsModule, PipesModule, CommonModule
    ],
  exports: [DashboardComponent, ProgessComponent, Graficas1Component, PagesComponent],
  providers: []
})
export class PagesModule {}
