import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelo/Experiencia.model';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';

@Component({
  selector: 'app-experiencia-editar',
  templateUrl: './experiencia-editar.component.html',
  styleUrls: ['./experiencia-editar.component.css']
})
export class ExperienciaEditarComponent implements OnInit {

  
  constructor(private route:Router,private service:ExperienciaService) { }

  
 experiencia:Experiencia=new Experiencia(0,"","","");

ngOnInit() {
    this.Editar();
  }

 Editar(){
  let id=localStorage.getItem("id");
  this.service.getExperienciaId(+id).subscribe(data => {
  this.experiencia=data;
    
    
  })
 }
Actualizar(experiencia:Experiencia){
  this.service.updateExperiencia(experiencia)
  .subscribe(data=>{this.experiencia=data;
    alert("se Actualizo con Exito...!!!!");
    this.route.navigate(['Home'])
  })
}
}
