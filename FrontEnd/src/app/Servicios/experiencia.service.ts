import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../modelo/Experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

 
URL='http://localhost:8080/experiencia/';

     constructor(private http: HttpClient) { }
     
     public getExperiencia(){
     return this.http.get<Experiencia[]>(this.URL+'traer');


   }
   createExperiencia(experiencia:Experiencia){
return this.http.post<Experiencia>(this.URL+'crear/',experiencia);

   }

}
