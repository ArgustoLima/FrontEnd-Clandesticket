import { Component, Input } from '@angular/core';
import { Itens } from 'src/app/modules/itens.module';
import { ItemService } from 'src/app/service/item.service';

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

  listaItens: Itens[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.itemGetService().subscribe(
      res => {
        this.listaItens = res;
      }
    );
  }
}
