import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Persona } from '../modelo/Persona.model';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

   URL='https://porfolioluis.onrender.com/personas';
  //  URL = 'http://localhost:8080/personas';

     constructor(private http: HttpClient) { }
     
     public getPersona(){
     return this.http.get<Persona[]>(this.URL+'/traer');


   }
   createPersona(persona:Persona){
return this.http.post<Persona>(this.URL+'/crear/',persona)

   }
  }
   
  
