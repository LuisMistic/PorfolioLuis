import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Home } from 'src/app/modelo/home.model';
import { HomeService } from 'src/app/Servicios/home.service';

@Component({
  selector: 'app-home-editar',
  templateUrl: './banner-editar.component.html',
  styleUrls: ['./banner-editar.component.css']
})
export class BannerEditarComponent implements OnInit {

  
  constructor(private route:Router,private service:HomeService) { }

  
 home:Home=new Home(0,"","","");

ngOnInit() {
    this.Editar();
  }

 Editar(){
  let id=localStorage.getItem("id");
  this.service.getHomeId(+id).subscribe(data => {
  this.home=data;
    
    
  })
 }
Actualizar(home:Home){
  this.service.updateHome(home)
  .subscribe(data=>{this.home=data;
    alert("se Actualizo con Exito...!!!!");
    this.route.navigate(['Home'])
  })

}
 obtener(e:any){
  this.home.img=e[0].base64;
 }
}
