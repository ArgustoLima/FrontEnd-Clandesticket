import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ItemService } from 'src/app/service/item.service';
import { ReusoService } from 'src/app/service/reuso.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-cadastrar-principal',
  templateUrl: './cadastrar-principal.component.html',
  styleUrls: ['./cadastrar-principal.component.scss']
})
export class CadastrarPrincipalComponent implements OnInit {

  private id: number = 19;

  constructor(
    public reuso: ReusoService,
    private service: ItemService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = "";
    console.log(userId);
  }

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
