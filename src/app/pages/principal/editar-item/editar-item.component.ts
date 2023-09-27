import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Itens } from 'src/app/modules/itens.module';
import { ItemService } from 'src/app/service/item.service';
import { ReusoService } from 'src/app/service/reuso.service';

@Component({
  selector: 'app-editar-item',
  templateUrl: './editar-item.component.html',
  styleUrls: ['./editar-item.component.scss']
})
export class EditarItemComponent implements OnInit {

  public id = this.itemService.id;

  public itens: Itens = {
    id: this.id,
    nome: "",
    valor: "",
    empresa: "",
    descricao: "",
    endereco: ""
  }

  constructor (
    public reuso: ReusoService,
    private itemService: ItemService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.itemService.buscarPorId(this.id).subscribe(
      res => {
        this.itens.id = res.id,
        this.itens.nome = res.nome,
        this.itens.valor = res.valor,
        this.itens.empresa = res.empresa,
        this.itens.descricao = res.descricao,
        this.itens.endereco = res.endereco
      },
      error => error
    )
  }

  public editarItem() {
    if (
      this.itens.nome.trim() === "" ||
      this.itens.valor.trim() === "" ||
      this.itens.empresa.trim() === "" ||
      this.itens.descricao.trim() === "" ||
      this.itens.endereco.trim() === ""
    ) {
      window.alert(`Edição inválida!
Insira as informações corretamente.`);
      return;
    }

    console.log(this.itens);

    this.itemService.itemPutService(this.itens).subscribe(
      res => {
        window.alert("Edição efetuada com sucesso!");
        this.router.navigate(['/listar']);
      },
      error => window.alert(`Edição inválida!
Insira as informações corretamente.`)
    );
  }
}
