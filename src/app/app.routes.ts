import { Routes } from '@angular/router';
import { PersonaComponent } from './pages/persona/persona.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { EditarUsuaComponent } from './pages/editar-usua/editar-usua.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

export const routes: Routes = [
    {   path: 'persona', component:PersonaComponent },
    {   path: 'usuario', component:UsuarioComponent },
    {   path: 'editar', component:EditarUsuaComponent},
    {   path: 'buscar', component:BuscarComponent}
];
