import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent {

  constructor(
    private service: AuthService
  ) { }

  public entrarPost(
    cpf: string,
    senha: string,
  ) {
    this.service.entrarPostService({
      cpf,
      senha
    }).subscribe(
      res => res,
      error => error
    )
  }
}
