import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from '../modelo/educacion.model';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

 
URL='http://localhost:8080/educacion';

     constructor(private http: HttpClient) { }
     
     public getEducacion(){
     return this.http.get<Educacion[]>(this.URL+'/traer');


   }
   createEducacion(educacion:Educacion){
return this.http.post<Educacion>(this.URL+'/crear/',educacion);

   }

   getEducacionId(id:number){
    return this.http.get<Educacion>(this.URL+"/"+id);

   }
   updateEducacion(educacion:Educacion){
    return this.http.put<Educacion>(this.URL+"/editar/"+educacion.id,educacion);
   }
   deleteEducacion(educacion:Educacion){
    return this.http.delete<Educacion>(this.URL+"/borrar/"+educacion.id);
    
   }
}
