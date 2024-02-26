import { Component } from '@angular/core';
import { PersonaService } from '../../Servicios/persona.service';
import { UsuarioService } from '../../Servicios/usuario.service';


@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  constructor(private personaservice:PersonaService, private usuarioservice:UsuarioService ) {}

  ngOnInit(): void {
    this.mostrarTipo();
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

  datosTipoUsuario:any;
  buscarPorTipo(tipo:any){
    this.usuarioservice.buscarUsuariosPorTipo(tipo.value).subscribe({
      next:(datos:any)=>{
        this.datosTipoUsuario = datos.users
        debugger
      },error:(err)=>{
        alert("No existe usuarios con ese registro")
    }
  })}

}
