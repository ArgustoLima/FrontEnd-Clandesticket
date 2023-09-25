import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ItemService } from 'src/app/service/item.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-cadastrar-principal',
  templateUrl: './cadastrar-principal.component.html',
  styleUrls: ['./cadastrar-principal.component.scss']
})
export class CadastrarPrincipalComponent implements OnInit {

  private id: number = 19;

  constructor(
    private service: ItemService,
    private usuarioService: UsuarioService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // this.usuarioService.usuarioGetService(this.id).subscribe(
    //   res => console.log(res),
    //   error => console.log(error)
    // );

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
      res => window.alert("Cadastro efetuado com sucesso!"),
      error => window.alert(
`Cadastro inválido!
Insira as iformações corretamente.`)
    );
  }
}
