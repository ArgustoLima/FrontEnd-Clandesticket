import { Component } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent {

  public mostrarGrid = false;

  public excluir() {
    this.mostrarGrid = true;
  }

}
