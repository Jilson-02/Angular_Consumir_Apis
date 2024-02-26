import { PersonaService } from './../../Servicios/persona.service';
import { UsuarioService } from './../../Servicios/usuario.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-editar-usua',
  standalone: true,
  imports: [],
  templateUrl: './editar-usua.component.html',
  styleUrl: './editar-usua.component.css'
})
export class EditarUsuaComponent {
  constructor(private usuarioservice: UsuarioService, private personaservice: PersonaService) { }

  ngOnInit(): void {
    this.mostrarTipo(),
      this.mostrarUsuario();
  }

  datosTipos: any;
  mostrarTipo() {
    this.personaservice.getTipo().subscribe({
      next: (datos: any) => {
        this.datosTipos = datos.types
      }, error: (err) => {
        console.log('err:' + err);
      }
    })
  }

  datosUsuario: any
  mostrarUsuario() {
    this.usuarioservice.getUsuarios().subscribe({
      next: (datos: any) => {
        this.datosUsuario = datos.users
      }, error: (err) => {
        console.log('err:' + err);
      }
    })
  }
  actualizarUsuario(id:any, user: any, email: any, password: any, typeusers_id: any): void {
    this.usuarioservice.updateUsuario(id.value,user.value, email.value, password.value, typeusers_id.value).subscribe({
      next: (datos: any) => {
        alert('Se actualizo la persona'); 

        this.mostrarUsuario();

      },
      error: (error: any) => {
        console.error('Error al registrar dato', error);
      }
    });
  }
}