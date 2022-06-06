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
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
