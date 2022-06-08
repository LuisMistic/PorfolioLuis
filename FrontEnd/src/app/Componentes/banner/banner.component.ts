import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/Persona.model';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
   personas:Persona[] = [];
  constructor() { }

  ngOnInit(): void {
    
  }
 
}
