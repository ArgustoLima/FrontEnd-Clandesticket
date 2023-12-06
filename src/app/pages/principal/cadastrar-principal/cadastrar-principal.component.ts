import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-cadastrar-principal',
  templateUrl: './cadastrar-principal.component.html',
  styleUrls: ['./cadastrar-principal.component.scss']
})
export class CadastrarPrincipalComponent {

  private id: number = 19;

  constructor(
    private service: ItemService,
    private router: Router
  ) {}

  public itemPost(
    nome: string,
    valor: string,
    empresa: string,
    descricao: string,
    endereco: string,
  ) {
    return this.service.itemPostService(
      nome,
      valor,
      empresa,
      descricao,
      endereco,
    ).subscribe(
      res => {
        window.alert("Cadastro efetuado com sucesso!"),
        this.router.navigate(['/comprar'])
      },
      error => window.alert(
`Cadastro inválido!
Insira as iformações corretamente.`)
    );
  }
}
