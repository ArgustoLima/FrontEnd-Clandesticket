import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-cadastrar-login',
  templateUrl: './cadastrar-login.component.html',
  styleUrls: ['./cadastrar-login.component.scss']
})
export class CadastrarLoginComponent {

  constructor(
    private service: UsuarioService,
    private router: Router
    ) {}

    public usuarioPost(
      nome: string,
      cpf: string,
      senha: string,
      repetir_senha: string
    ) {
      if (senha !== repetir_senha) {
        window.alert("As senhas não coincidem!");
        return;
      }
      return this.service.usuarioPostService(
        nome,
        cpf,
        senha,
        repetir_senha
      ).subscribe(
        res => this.router.navigate(['/entrar']),
        error => window.alert(
`Cadastro inválido!
Insira as iformações corretamente.`)
      );
    }
}
