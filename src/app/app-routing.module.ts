import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ListaPersonasComponent } from './pages/lista-personas/lista-personas.component';

const routes: Routes = [
  {path:"paginas/formulario", component:FormularioComponent},
  {path:"paginas/lista-Personas", component:ListaPersonasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
