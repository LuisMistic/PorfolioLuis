import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelo/Experiencia.model';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';
import { TokenService } from 'src/app/Servicios/token.service';



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  islogged = false;
  experiencias:Experiencia []=[];
  roles:string[];
  isAdmin = false;
  constructor(public experienciaService: ExperienciaService, private route: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.experienciaService.getExperiencia().subscribe(data => {this.experiencias = data 
    
    })
     if (this.tokenService.getToken()){
      this.islogged = true;
    }else {
      this.islogged = false;
    }
   
   
  }
  ExperienciaAgregar(){
    this.route.navigate(['experienciaAgregar'])
    //this.roles = this.tokenService.getAuthorities();
    //this.roles.forEach(role => this){
     // if (rol === 'ROLE_ADMIN'){
      //  this.isAdmin = true;//
     // }
    }
  //}
   onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

   Editar(experiencia:Experiencia):void{
  localStorage.setItem("id", experiencia.id.toString());
  this.route.navigate(["editar"]);
 }
  Borrar(experiencia:Experiencia){
  this.experienciaService.deleteExperiencia(experiencia)
  .subscribe(data=>{
    this.experiencias=this.experiencias.filter(p=>p!==experiencia);
    alert("Usuario eliminado...");
  })
}

}
