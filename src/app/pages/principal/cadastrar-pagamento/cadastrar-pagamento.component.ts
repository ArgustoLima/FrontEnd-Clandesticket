import { Component } from '@angular/core';
import { PagamentoService } from 'src/app/service/pagamento.service';

@Component({
  selector: 'app-cadastrar-pagamento',
  templateUrl: './cadastrar-pagamento.component.html',
  styleUrls: ['./cadastrar-pagamento.component.scss']
})
export class CadastrarPagamentoComponent {

  selectedTipo: string = '';

  constructor(private service: PagamentoService) {}

  pagamentoPost(
    tipo: string,
    numero_cartao: string,
  ) {
    return this.service.PagamentoPostService(
      tipo,
      numero_cartao
    ).subscribe(
      res => window.alert("Cadastro efetuado com sucesso!"),
      error => window.alert(
`Cadastro inválido!
Insira as iformações corretamente.`)
    );
  }
}
