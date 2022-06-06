import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudiovisualesComponent } from './Componentes/audiovisuales/audiovisuales.component';
import { BannerComponent } from './Componentes/banner/banner.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './Componentes/habilidades/habilidades.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { RedesComponent } from './Componentes/redes/redes.component';

const routes: Routes = [
  {path:'audiovisuales', component:AudiovisualesComponent},
  {path: 'banner', component:BannerComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'educacion', component:EducacionComponent},
  {path: 'experiencia', component:ExperienciaComponent},
  {path: 'habilidades', component:HabilidadesComponent},
  {path: 'navbar', component:NavbarComponent},
  {path: 'redes', component:RedesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
