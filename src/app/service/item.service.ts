import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Itens } from '../modules/itens.module';
import { Usuario } from '../modules/usuario.module';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url: string = 'http://localhost:8080/';

  constructor(
    private http: HttpClient) { }

  public itemPostService(
    nome: string,
    valor: string,
    empresa: string,
    descricao: string,
    endereco: string,
  ): Observable<Itens> {
    return this.http.post<Itens>(`${this.url}itens`, {
      nome: nome,
      valor: valor,
      empresa: empresa,
      descricao: descricao,
      endereco: endereco,
    }).pipe(
      res => res,
      error => error
    )
  }

  public itemGetService(): Observable<Array<Itens>> {
    return this.http.get<Array<Itens>>(`${this.url}itens`).pipe(
      res => res,
      error => error
    )
  }

  public buscarPorId(id : number) : Observable<Itens> {
    const url = `${this.url}itens/${id}`
    return this.http.get<Itens>(url)
  }

  public itemDeleteService(id: number) : Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.url}itens/${id}`)
  }

}
