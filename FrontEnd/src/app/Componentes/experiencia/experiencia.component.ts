import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/Persona.model';

import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  persona: Persona = new Persona ("","","");
  constructor(public personaService: ServiceService) {}

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
