import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/domain/persona';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  value = 'Clear Me';
  nombre='Clear Me:Nombres'
  direccion='Clear Me:Direccion'
  cedula='Clear Me:Cedula'
  edad='Clear Me:Edad'


  persona:Persona=new Persona();

  constructor(private personaService:PersonaService,
    private router: Router) {
  
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this. persona= new Persona()
        this.  persona = params[' persona']
      }
    }
  
  
    guardar(){
      console.log(this.persona)
      this.personaService.save(this.persona)
      this.persona= new Persona()
  
     this.router.navigate(["paginas/lista-Personas"]);
  
  
    }




}
