import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  postPersona(type:any){
    return this.http.post('http://localhost:3000/api/type/users', {
      type:type
    })
  }

  getTipo(){
    return this.http.get('http://localhost:3000/api/type/users');
  }

  deleteTipo(id:number){
    return this.http.delete('http://localhost:3000/api/type/users/' +id);
  }

 
}
