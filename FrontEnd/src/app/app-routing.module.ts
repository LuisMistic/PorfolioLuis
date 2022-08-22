import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerEditarComponent } from './Componentes/banner-editar/banner-editar.component';
import { EducacionAgregarComponent } from './Componentes/educacion-agregar/educacion-agregar.component';
import { EducacionEditarComponent } from './Componentes/educacion-editar/educacion-editar.component';
import { EducacionComponent} from './Componentes/educacion/educacion.component';
import { ExperienciaAgregarComponent } from './Componentes/experiencia-agregar/experiencia-agregar.component';
import { ExperienciaEditarComponent } from './Componentes/experiencia-editar/experiencia-editar.component';
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { HabilidadesAgregarComponent } from './Componentes/habilidades-agregar/habilidades-agregar.component';
import { HabilidadesEditarComponent } from './Componentes/habilidades-editar/habilidades-editar.component';
import { HabilidadesComponent } from './Componentes/habilidades/habilidades.component';

import { HomeComponent } from './Componentes/home/home.component';
import { LoginComponent } from './Componentes/login/login.component';



const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'experienciaAgregar', component: ExperienciaAgregarComponent},
  {path:'editar', component:ExperienciaEditarComponent},
  {path:'editarHome', component: BannerEditarComponent},
  {path:'Home', component: HomeComponent},
  {path:'Experiencia', component: ExperienciaComponent},
  {path: 'Educacion', component: EducacionComponent},
  {path:'EducacionAgregar', component: EducacionAgregarComponent},
  {path:'EducacionEditar', component:EducacionEditarComponent},
  {path:'habilidadesComponent', component: HabilidadesComponent},
  {path:'HabilidadesAgregar', component: HabilidadesAgregarComponent},
  {path:'HabilidadesEditar', component: HabilidadesEditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
