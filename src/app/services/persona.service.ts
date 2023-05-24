import { Injectable } from '@angular/core';
import { Persona } from 'src/domain/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }


  Persona: Persona[]=[]

  

  save(contacto:Persona){

    this.Persona .push(contacto)
    console.log(this.Persona );
    
  }
  getlist(){
return this.Persona

  }
}
