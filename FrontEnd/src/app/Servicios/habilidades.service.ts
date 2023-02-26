import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habilidades } from '../modelo/habilidades.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  [x: string]: any;

  URL='https://porfolioluis.onrender.com/habilidades';
  //  URL = 'http://localhost:8080/habilidades';


     constructor(private http: HttpClient) { }
     
     public getHabilidades(){
     return this.http.get<Habilidades[]>(this.URL+'/traer');


   }
   createHabilidades(habilidades:Habilidades){
return this.http.post<Habilidades>(this.URL+'/crear/',habilidades);

   }

   getHabilidadesId(id:number){
    return this.http.get<Habilidades>(this.URL+"/"+id);

   }
   updateHabilidades(habilidades:Habilidades){
    return this.http.put<Habilidades>(this.URL+"/editar/"+habilidades.id,habilidades);
   }
   deleteHabilidades(habilidades:Habilidades){
    return this.http.delete<Habilidades>(this.URL+"/borrar/"+habilidades.id);
    
   }
}
