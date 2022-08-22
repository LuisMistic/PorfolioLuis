import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelo/Experiencia.model';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  experiencias:Experiencia []=[];
  constructor(public experienciaService: ExperienciaService, private route: Router) {}

  ngOnInit(): void {
    this.experienciaService.getExperiencia().subscribe(data => {this.experiencias = data 
    })
    
  }
  ExperienciaAgregar(){
    this.route.navigate(['experienciaAgregar'])
  }

   Editar(experiencia:Experiencia):void{
  localStorage.setItem("id", experiencia.id.toString());
  this.route.navigate(["editar"]);
 }
  Borrar(experiencia:Experiencia){
  this.experienciaService.deleteExperiencia(experiencia)
  .subscribe(data=>{
    this.experiencias=this.experiencias.filter(p=>p!==experiencia);
    alert("Usuario eliminado...");
  })
  }

}
