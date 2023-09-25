import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Itens } from 'src/app/modules/itens.module';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-excluir-item',
  templateUrl: './excluir-item.component.html',
  styleUrls: ['./excluir-item.component.scss']
})
export class ExcluirItemComponent {

  public listaItens: Itens[] = [];

  constructor (
    private itemService: ItemService,
    private router : Router,
    ) {}

   public excluirItem() {
    const index: number = this.itemService.id;
    return this.itemService.itemDeleteService(index).subscribe(
      res => {
        this.listaItens = this.listaItens.filter(
          item => {
            return index != item.id
          }
        ),
        window.alert("Deleção efetuado com sucesso!"),
        this.router.navigate(['/listar'])
      },
      error => error
    )
   }
}
