import { ModalUploadService } from './../components/modal-upload/modal-upload.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService,
  LoginGuardGuard,
  SubirArchivoService,
  HospitalService,
  MedicoService,
  AdminGuard,
  VerficaTokenGuard
} from './services.index';

@NgModule({
  imports: [CommonModule, HttpClientModule, HttpModule],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    SubirArchivoService,
    UsuarioService,
    LoginGuardGuard,
    ModalUploadService,
    HospitalService,
    MedicoService,
    AdminGuard,
    VerficaTokenGuard
  ],
  declarations: []
})
export class ServiceModule {}
