import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './templete/titulo/titulo.component';
import { MenuComponent } from './templete/menu/menu.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ListaPersonasComponent } from './pages/lista-personas/lista-personas.component';
import { PersonaComponent } from './pages/persona/persona.component';
import { PieComponent } from './templete/pie/pie.component';






@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    MenuComponent,
    FormularioComponent,
    ListaPersonasComponent,
    PersonaComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule ,
    MatInputModule,
    FormsModule,
    MatIconModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
