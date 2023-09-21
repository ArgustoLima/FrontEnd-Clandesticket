import { Component } from '@angular/core';
import { ReusoApiUsuarioService } from 'src/app/service/reuso-api-usuario.service';

@Component({
  selector: 'app-cadastrar-login',
  templateUrl: './cadastrar-login.component.html',
  styleUrls: ['./cadastrar-login.component.scss']
})
export class CadastrarLoginComponent {

  constructor(private service: ReusoApiUsuarioService) {}

  public usuarioPost(
    valueNome: string,
    valueCpf: string,
    valueSenha: string,
    valueRepetirsenha: string
  ) {
  return this.service.usuarioPost(
    valueNome,
    valueCpf,
    valueSenha,
    valueRepetirsenha).subscribe(
      res => res,
      error => error
    );
  }
}
