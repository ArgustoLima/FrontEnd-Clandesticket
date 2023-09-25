import { Component, Input, OnInit } from '@angular/core';
import { Itens } from 'src/app/modules/itens.module';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  listaItens: Itens[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.itemGetService().subscribe(
      res => {
        this.listaItens = res;
      }
    );
  }

  public retornarIndex(index: any) {
    this.itemService.id = this.listaItens[index].id;
  }
}
