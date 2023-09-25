import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagamentos } from '../modules/pagamento.module';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  private url: string = 'http://localhost:8080/';

  constructor(private http:  HttpClient) { }

  public PagamentoPostService (
    tipo: string,
    numero_cartao: string
  ): Observable<Pagamentos> {
    return this.http.post<Pagamentos>(`${this.url}pagamentos`, {
      tipo: tipo,
      numero_cartao: numero_cartao
    }).pipe(
      res => res,
      error => error
    )
  }

}
