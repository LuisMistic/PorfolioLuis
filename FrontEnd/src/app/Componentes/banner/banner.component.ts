import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Home } from 'src/app/modelo/home.model';
import { HomeService } from 'src/app/Servicios/home.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})


export class BannerComponent implements OnInit {
  //persona: Persona = new Persona ("","","");
  homee:Home []=[];
  constructor(public homeService: HomeService, private route: Router) {}

  ngOnInit(): void {
    this.homeService.getHome().subscribe(data => {this.homee = data;
      console.log(data);
    })
    
  }
  HomeAgregar(){
    this.route.navigate(['homeAgregar'])
  }

   Editar(home:Home):void{
  localStorage.setItem("id", home.id.toString());
  this.route.navigate(["editarHome"]);
 }
  Borrar(home:Home){
  this.homeService.deleteHome(home)
  .subscribe(data=>{
    this.homee=this.homee.filter(p=>p!==home);
    alert("Usuario eliminado...");
  })
  }

}
