import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/modelo/educacion.model';
import { EducacionService } from 'src/app/Servicios/educacion.service';
import { TokenService } from 'src/app/Servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})


  export class EducacionComponent implements OnInit {
   islogged = false;
   educacions:Educacion []=[];
  constructor(public educacionService: EducacionService, private route: Router,private router:Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe(data => {this.educacions = data 
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
