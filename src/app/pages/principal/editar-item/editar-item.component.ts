import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Itens } from 'src/app/modules/itens.module';
import { ItemService } from 'src/app/service/item.service';
import { ReusoService } from 'src/app/service/reuso.service';

@Component({
  selector: 'app-editar-item',
  templateUrl: './editar-item.component.html',
  styleUrls: ['./editar-item.component.scss']
})
export class EditarItemComponent {

  public listaItens: Itens[] = [];

  constructor (
    public reuso: ReusoService,
    private itemService: ItemService,
    private router: Router,
  ) {}

  public editarItem(itens: Itens) {
    const index: number = this.itemService.id;
    if (index === this.listaItens.indexOf(itens)) {
      return this.itemService.itemPutService(itens).subscribe(
        res => res,
        error => error
      );
    }
    return null;
  }

}
