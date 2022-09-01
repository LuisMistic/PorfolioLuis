import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Home } from '../modelo/home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

 
URL='https://backentluis.herokuapp.com/home';

     constructor(private http: HttpClient) { }
     
     public getHome(){
     return this.http.get<Home[]>(this.URL+'/traer');


   }
   createHome(home:Home){
return this.http.post<Home>(this.URL+'/crear/',home);

   }

   getHomeId(id:number){
    return this.http.get<Home>(this.URL+"/"+id);

   }
   updateHome(home:Home){
    return this.http.put<Home>(this.URL+"/editar/"+home.id,home);
   }
   deleteHome(home:Home){
    return this.http.delete<Home>(this.URL+"/borrar/"+home.id);
    
   }
}