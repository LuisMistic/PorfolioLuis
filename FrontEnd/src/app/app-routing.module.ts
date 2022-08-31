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
import {RegistroComponent} from './auth/registro.component'
import { HomeComponent } from './Componentes/home/home.component';
import { LoginComponent } from './Componentes/login/login.component';
import {ProdGuardService as guard} from './guards/prod-guard.service';
import { LoginRegistroComponent } from './login-registro/login-registro.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'registro', component: LoginRegistroComponent},
  {path:'experienciaAgregar', component: ExperienciaAgregarComponent, canActivate: [guard],data:{expectedRol:['admin']}},
  {path:'editar', component:ExperienciaEditarComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }  },
  {path:'editarHome', component: BannerEditarComponent, canActivate: [guard],data: {expectedRol:['admin', 'user'] } },
  {path:'Home', component: HomeComponent},
  
  {path:'Experiencia', component: ExperienciaComponent},
  {path: 'Educacion', component: EducacionComponent},
  {path:'EducacionAgregar', component: EducacionAgregarComponent, canActivate: [guard],data:{expectedRol:['admin']}},
  {path:'EducacionEditar', component:EducacionEditarComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path:'habilidadesComponent', component: HabilidadesComponent},
  {path:'HabilidadesAgregar', component: HabilidadesAgregarComponent, canActivate: [guard],data:{expectedRol:['admin']}},
  {path:'HabilidadesEditar', component: HabilidadesEditarComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
