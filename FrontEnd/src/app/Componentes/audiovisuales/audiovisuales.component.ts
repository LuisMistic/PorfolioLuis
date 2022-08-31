import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Servicios/token.service';

@Component({
  selector: 'app-audiovisuales',
  templateUrl: './audiovisuales.component.html',
  styleUrls: ['./audiovisuales.component.css']
})
export class AudiovisualesComponent implements OnInit {
  
    islogged = false;
  constructor( private route: Router,private tokenService: TokenService) { }

  ngOnInit(): void {
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
}
