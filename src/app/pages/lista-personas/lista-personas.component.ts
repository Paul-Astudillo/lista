import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/domain/persona';


@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.scss']
})
export class ListaPersonasComponent {

  listadoPersonas: Persona[] = [] 
  personaSeleccionado: Persona| null = null;
  
  constructor(personaService: PersonaService,private router: Router ) {
    this.listadoPersonas = personaService.getlist()
    console.log('listadoCarrera', this.listadoPersonas)
  }


  eliminar(persona: Persona) {
    for(let i = 0 ; i < this.listadoPersonas.length ; i++){
      if(this.listadoPersonas[i] === persona){
        console.log("son iguales");
        this.listadoPersonas.splice(i,1);
      }
    }
  }




}
