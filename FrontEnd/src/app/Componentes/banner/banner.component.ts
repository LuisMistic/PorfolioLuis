import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Home } from 'src/app/modelo/home.model';
import { HomeService } from 'src/app/Servicios/home.service';
import { TokenService } from 'src/app/Servicios/token.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})


export class BannerComponent implements OnInit {
  //persona: Persona = new Persona ("","","");
  public loading: boolean;
  homee:Home []=[];
  islogged = false;
  constructor(public homeService: HomeService, private route: Router,private tokenService: TokenService) {
    this.loading = true;
  }

  ngOnInit(): void {
    this.homeService.getHome().subscribe(data => {this.homee = data;
      console.log(data);
    })
    if (this.tokenService.getToken()){
      this.islogged = true;
    }else {
      this.islogged = false;
      this.loading = false;
    }
    
  
  }
  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
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
  PersonaAgregar(){
  this.route.navigate(['bannerAgregar'])

  }
  }
  

