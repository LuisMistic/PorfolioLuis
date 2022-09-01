import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/modelo/habilidades.model';
import { HabilidadesService } from 'src/app/Servicios/habilidades.service';

@Component({
  selector: 'app-habilidades-editar',
  templateUrl: './habilidades-editar.component.html',
  styleUrls: ['./habilidades-editar.component.css']
})
export class HabilidadesEditarComponent implements OnInit {

  constructor(private route:Router,private service:HabilidadesService) { }

  
 habilidad:Habilidades=new Habilidades(0,"","","");

ngOnInit() {
    this.Editar();
  }

 Editar(){
  let id=localStorage.getItem("id");
  this.service.getHabilidadesId(+id).subscribe(data => {
  this.habilidad=data;
    
    
  })
 }
Actualizar(habilidad:Habilidades){
  this.service.updateHabilidades(habilidad)
  .subscribe(data=>{this.habilidad=data;
    alert("se Actualizo con Exito...!!!!");
    this.route.navigate(['Home'])
  })
}
Cancelar(){
      this.route.navigate(['Home'])
    }
    obtener(e:any){
  this.habilidad.img=e[0].base64;
 }
}
