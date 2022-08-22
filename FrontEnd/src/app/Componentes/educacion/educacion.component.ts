import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/modelo/educacion.model';
import { EducacionService } from 'src/app/Servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})


  export class EducacionComponent implements OnInit {
 
   educacions:Educacion []=[];
  constructor(public educacionService: EducacionService, private route: Router) {}

  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe(data => {this.educacions = data 
    })
    
  }
  EducacionAgregar(){
    this.route.navigate(['EducacionAgregar'])
  }

   Editar(educacion:Educacion):void{
  localStorage.setItem("id", educacion.id.toString());
  this.route.navigate(["EducacionEditar"]);
 }
  Borrar(educacion:Educacion){
  this.educacionService.deleteEducacion(educacion)
  .subscribe(data=>{
    this.educacions=this.educacions.filter(p=>p!==educacion);
  })
  alert(" eliminado de manera exitosa...");
  window.location.reload();
}

}
