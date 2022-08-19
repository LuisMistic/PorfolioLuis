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
  //persona: Persona = new Persona ("","","");
  Educacion:Educacion []=[];
  constructor(public EducacionService: EducacionService, private route: Router) {}

  ngOnInit(): void {
    this.EducacionService.getEducacion().subscribe(data => {this.Educacion = data 
    })
    
  }
  EducacionAgregar(){
    this.route.navigate(['EducacionAgregar'])
  }

   Editar(Educacion:Educacion):void{
  localStorage.setItem("id", Educacion.id.toString());
  this.route.navigate(["editar"]);
 }
  Borrar(Educacion:Educacion){
  this.EducacionService.deleteEducacion(Educacion)
  .subscribe(data=>{
    this.Educacion=this.Educacion.filter(p=>p!==Educacion);
    alert("Usuario eliminado...");
  })
  }

}
