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
   Educa:Educacion []=[];
  constructor(public EducacionService: EducacionService, private route: Router) {}

  ngOnInit(): void {
    this.EducacionService.getEducacion().subscribe(data => {this.Educa = data 
    })
    
  }
  EducacionAgregar(){
    this.route.navigate(['EducacionAgregar'])
  }

   Editar(educar:Educacion):void{
  localStorage.setItem("id", educar.id.toString());
  this.route.navigate(["editar"]);
 }
  Borrar(Educacion:Educacion){
  this.EducacionService.deleteEducacion(Educacion)
  .subscribe(data=>{
    this.Educa=this.Educa.filter(p=>p!==Educacion);
    alert("Usuario eliminado...");
  })
  }

}
