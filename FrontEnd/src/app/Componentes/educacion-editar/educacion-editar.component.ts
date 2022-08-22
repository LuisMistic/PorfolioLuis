import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/modelo/educacion.model';
import { EducacionService } from 'src/app/Servicios/educacion.service';

@Component({
  selector: 'app-educacion-editar',
  templateUrl: './educacion-editar.component.html',
  styleUrls: ['./educacion-editar.component.css']
})
export class EducacionEditarComponent implements OnInit {

 
  constructor(private route:Router,private service:EducacionService) { }

  
 educacions:Educacion=new Educacion(0,"","","");

ngOnInit() {
    this.Editar();
  }

 Editar(){
  let id=localStorage.getItem("id");
  this.service.getEducacionId(+id).subscribe(data => {
  this.educacions=data;
    
    
  })
 }
Actualizar(educacions:Educacion){
  this.service.updateEducacion(educacions)
  .subscribe(data=>{this.educacions=data;
    alert("se Actualizo con Exito...!!!!");
    this.route.navigate(['Home'])
  })
}
}



