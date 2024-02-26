import { Component } from '@angular/core';
import { PersonaService } from '../../Servicios/persona.service';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {

  //AQUI VAN TODAS LAS FUNCIONES GET PARA PODER MOSTRAR
  ngOnInit(): void {
    this.mostrarTipo();
  }

  constructor(private personaservice:PersonaService){}

  storeTipo( type: any){
    this.personaservice.postPersona(type.value).subscribe
      ({
        next: (datos: any) => {
          this.mostrarTipo();
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

  eliminarTipo(id:number){
    this.personaservice.deleteTipo(id).subscribe({
      next: ()=>{
        this.mostrarTipo()
      },error:(err) => {
        console.log('err:' +err);
      }
    })
  }
}
