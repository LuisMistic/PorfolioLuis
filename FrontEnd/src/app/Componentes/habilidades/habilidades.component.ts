import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/modelo/habilidades.model';
import { HabilidadesService } from 'src/app/Servicios/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidad: Habilidades []=[];
  constructor(public habilidadesService: HabilidadesService, private route: Router) {}

  ngOnInit(): void {
    this.habilidadesService.getHabilidades().subscribe(data => {this.habilidad = data 
    })
  }
  HabilidadesAgregar(){
    this.route.navigate(['HabilidadesAgregar'])
  }

Editar(habilidades: Habilidades):void{
  localStorage.setItem("id", habilidades.id.toString());
  this.route.navigate(["HabilidadesEditar"]);
 }
  Borrar(habilidades:Habilidades){
  this.habilidadesService.deleteHabilidades(habilidades)
  .subscribe(data=>{
    this.habilidad=this.habilidad.filter(p=>p!==habilidades);
  })
  alert(" eliminado de manera exitosa...");
  window.location.reload();
}
}