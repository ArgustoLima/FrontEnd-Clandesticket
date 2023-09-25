import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Itens } from 'src/app/modules/itens.module';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-excluir-item',
  templateUrl: './excluir-item.component.html',
  styleUrls: ['./excluir-item.component.scss']
})
export class ExcluirItemComponent implements OnInit{

  listaItens: Itens[] = [];

  constructor (private itemService: ItemService, private route : ActivatedRoute, private activeRoute: ActivatedRoute,) {}


  ngOnInit(): void {
    this.itemService.itemGetService().subscribe(
      res => {
        this.listaItens = res;
      }
    );
   }

   public excluirItem(id: number) {
    return this.itemService.itemDeleteService(id).subscribe(
      res => {
        this.listaItens = this.listaItens.filter(
          item => {
            return id != item.id
          }
        )
      },
      error => error
    )
   }
}
