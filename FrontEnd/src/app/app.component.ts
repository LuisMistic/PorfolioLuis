import { Component } from '@angular/core';
import { RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Porfolio';

  constructor(private router:Router){}
    Audiovisuales(){
    this.router.navigate(["audiovisuales"]);
    }
    Nuevos(){
      
    }
    
  }

