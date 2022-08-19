import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/modelo/educacion.model';
import { EducacionService } from 'src/app/Servicios/educacion.service';

@Component({
  selector: 'app-educacion-agregar',
  templateUrl: './educacion-agregar.component.html',
  styleUrls: ['./educacion-agregar.component.css']
})
export class EducacionAgregarComponent implements OnInit {

 educacion:Educacion=new Educacion(0,"","","")
  constructor(private route: Router, private service:EducacionService) { }

  ngOnInit() {
  }
  Guardar(){
    this.service.createEducacion(this.educacion)
    .subscribe(data =>{
      alert("Se agrego con Exito...!!!");
      this.route.navigate(['Home']);
    })
    
  }

}
