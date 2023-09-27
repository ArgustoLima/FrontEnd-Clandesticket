import { AuthService } from 'src/app/service/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Itens } from 'src/app/modules/itens.module';
import { ItemService } from 'src/app/service/item.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {

  listaItens: Itens[] = [];

  constructor(
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.itemService.itemGetService().subscribe(
      res => {
        this.listaItens = res;
      }
    );
  }
}
