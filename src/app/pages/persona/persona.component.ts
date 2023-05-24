import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/domain/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent {

  Persona: Persona = new Persona();

  constructor(private personaservice:PersonaService,
    
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.Persona  = new Persona  ()
        this.Persona  = params['Persona ']
      }
    }

}
