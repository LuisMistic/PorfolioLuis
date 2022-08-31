import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelo/Experiencia.model';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';

@Component({
  selector: 'app-experiencia-agregar',
  templateUrl: './experiencia-agregar.component.html',
  styleUrls: ['./experiencia-agregar.component.css']
})
export class ExperienciaAgregarComponent implements OnInit {
experiencia:Experiencia=new Experiencia(0,"","","")
  constructor(private route: Router, private service:ExperienciaService) { }

  ngOnInit() {
  }
  Guardar(){
    this.service.createExperiencia(this.experiencia)
    .subscribe(data =>{
      
      this.route.navigate(['Home']);
      
    })
     alert("Se agrego con Exito...!!!");
  
}
  }
 

