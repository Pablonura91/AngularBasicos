import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './mainPage/dbz.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    DbzComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports: [
    DbzComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
