import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Home } from 'src/app/modelo/home.model';
import { HomeService } from 'src/app/Servicios/home.service';

@Component({
  selector: 'app-banner-agregar',
  templateUrl: './banner-agregar.component.html',
  styleUrls: ['./banner-agregar.component.css']
})
export class BannerAgregarComponent implements OnInit {

  home:Home=new Home(0,"","","")
  constructor(private route: Router, private service:HomeService) { }

  ngOnInit() {
  }
  Guardar(){
    this.service.createHome(this.home)
    .subscribe(data =>{
      alert("Se agrego con Exito...!!!");
      this.route.navigate(['Home']);
    })   
  }

  Cancelar(){
      this.route.navigate(['Home'])
    }


   obtener(e:any){
  this.home.img=e[0].base64;
 }
}




