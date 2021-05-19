import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>

    <button (click)="modificarContador(base)">+{{ base }}</button>
    <span> {{ contador }} </span>
    <button (click)="modificarContador(-base)">-{{ base }}</button>
  `,
})
export class ContadorComponent {
  title = 'bases';
  contador: number = 10;
  base: number = 5;

  modificarContador(valor: number) {
    this.contador += valor;
  }
}
