import { Component } from '@angular/core';
import { UsuarioService } from '../../Servicios/usuario.service';
import { PersonaService } from '../../Servicios/persona.service';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  constructor(private usuarioservice:UsuarioService, private personaservice:PersonaService) {}

  ngOnInit(): void {
    this.mostrarTipo(),
    this.mostrarUsuario();
  }

  storeUsuario( user:any, email:any, password:any, typeusers_id:any){
    this.usuarioservice.postUsuario(user.value, email.value, password.value, typeusers_id.value).subscribe
      ({
        next: (datos: any) => {
          alert('Se agregó la persona');    
        },
        error: (err) => {
          console.log('error' + err);
        },
      });
  }

  datosTipos:any;
  mostrarTipo(){
    this.personaservice.getTipo().subscribe({
      next:(datos:any) => {
        this.datosTipos = datos.types
      },error:(err) => {
        console.log('err:' +err);
      }
    })
  }

  datosUsuario:any
  mostrarUsuario(){
    this.usuarioservice.getUsuarios().subscribe({
      next:(datos:any) => {
        this.datosUsuario = datos.users
      },error:(err) => {
        console.log('err:' +err);
      }
    })
  }  

  eliminarUsuario(id:number){
    this.usuarioservice.deleteUsuario(id).subscribe({
      next: ()=>{
        this.mostrarTipo()
      },error:(err) => {
        console.log('err:' +err);
      }
    })
  }

  
}
