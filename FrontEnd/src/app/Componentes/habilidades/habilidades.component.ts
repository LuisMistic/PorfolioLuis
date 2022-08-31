import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/modelo/habilidades.model';
import { HabilidadesService } from 'src/app/Servicios/habilidades.service';
import { TokenService } from 'src/app/Servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  islogged = false;
  habilidad: Habilidades []=[];
  constructor(public habilidadesService: HabilidadesService, private route: Router,private tokenService: TokenService) {}

  ngOnInit(): void {
    this.habilidadesService.getHabilidades().subscribe(data => {this.habilidad = data 
    })
     if (this.tokenService.getToken()){
      this.islogged = true;
    }else {
      this.islogged = false;
    }
    
  }
  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
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