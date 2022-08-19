import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './Componentes/banner/banner.component';
import { ServiceService } from './Servicios/service.service';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { RedesComponent } from './Componentes/redes/redes.component';
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { AudiovisualesComponent } from './Componentes/audiovisuales/audiovisuales.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { HabilidadesComponent } from './Componentes/habilidades/habilidades.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Componentes/home/home.component';
import { LoginComponent } from './Componentes/login/login.component';
import { ExperienciaAgregarComponent } from './Componentes/experiencia-agregar/experiencia-agregar.component';
import { FormsModule } from '@angular/forms';
import { ExperienciaService } from './Servicios/experiencia.service';

import { ExperienciaEditarComponent } from './Componentes/experiencia-editar/experiencia-editar.component';
import { BannerEditarComponent } from './Componentes/banner-editar/banner-editar.component';
import { BannerAgregarComponent } from './Componentes/banner-agregar/banner-agregar.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { EducacionAgregarComponent } from './Componentes/educacion-agregar/educacion-agregar.component';
import { EducacionEditarComponent } from './Componentes/educacion-editar/educacion-editar.component';



@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent,
    RedesComponent,
    ExperienciaComponent,
    AudiovisualesComponent,
    EducacionComponent,
    HabilidadesComponent,
    ContactoComponent,
    HomeComponent,
    LoginComponent,
    ExperienciaAgregarComponent,
    ExperienciaEditarComponent,
    BannerEditarComponent,
    BannerAgregarComponent,
    EducacionAgregarComponent,
    EducacionEditarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AlifeFileToBase64Module
  ],
  providers: [ServiceService,ExperienciaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
