import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  postUsuario(user:any, email:any, password:any, typeusers_id:any){
    return this.http.post('http://localhost:3000/api/register', {
      user:user,
      email:email,
      password:password,
      typeusers_id:typeusers_id
    })
  }

  getUsuarios(){
    return this.http.get('http://localhost:3000/api/user');
  }

  deleteUsuario(id:number){
    return this.http.delete('http://localhost:3000/api/user/' +id);
  }

  updateUsuario(id:any, user:any, email:any, password:any, typeusers_id:any){
    return this.http.put('http://localhost:3000/api/user/' +id, {
      user:user,
      email:email,
      password:password,
      typeusers_id:typeusers_id
    })
  }

  buscarUsuariosPorTipo(tipo: string) {
    return this.http.get('http://localhost:3000/api/users/type/'+tipo);
  }

}
