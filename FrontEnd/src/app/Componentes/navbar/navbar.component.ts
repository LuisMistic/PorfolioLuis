import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Servicios/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  islogged = false;
  constructor(private router:Router, private tokenService: TokenService) { 
   

  }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.islogged = true;
    }else {
      this.islogged = false;
    }
  }
 login(){

   this.router.navigate(['\login'])

 }
  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
  
}