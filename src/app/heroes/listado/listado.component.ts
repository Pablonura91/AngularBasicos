import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['sekjfb', 'dksjbvs', 'ksdjbf'];
  borrado: string = "";

  constructor() { }

  borrarHeroe() {
    this.borrado = this.heroes.shift() || "";
  }

}
