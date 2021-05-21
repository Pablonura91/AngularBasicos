import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  constructor() {}

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 14000,
    },
  ];

  get nuevo(): Personaje {
    return {
      nombre: 'Maestro',
      poder: 2,
    };
  }

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  addPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
