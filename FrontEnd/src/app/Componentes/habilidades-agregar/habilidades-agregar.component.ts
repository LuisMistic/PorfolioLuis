import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/modelo/habilidades.model';
import { HabilidadesService } from 'src/app/Servicios/habilidades.service';

@Component({
  selector: 'app-habilidades-agregar',
  templateUrl: './habilidades-agregar.component.html',
  styleUrls: ['./habilidades-agregar.component.css']
})
export class HabilidadesAgregarComponent implements OnInit {

  habilidad:Habilidades=new Habilidades(0,"","","")
  constructor(private route: Router, private service:HabilidadesService) { }

  ngOnInit() {
  }
  Guardar(){
    this.service.createHabilidades(this.habilidad)
    .subscribe(data =>{
      alert("Se agrego con Exito...!!!");
      this.route.navigate(['Home']);
    })
    
  }
Cancelar(){
      this.route.navigate(['Home'])
    }
    obtener(e:any){
  this.habilidad.img=e[0].base64;
 }
}
