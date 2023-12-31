import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modules/usuario.module';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = 'http://localhost:8080/';
  public id!: number;

  constructor(private http: HttpClient) { }

  public usuarioPostService (
    nome: string,
    cpf: string,
    senha: string,
    repetir_senha: string
    ): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}usuarios`, {
      nome: nome,
      cpf: cpf,
      senha: senha,
      repetir_senha: repetir_senha,
    }). pipe (
      res => res,
      error => error,
    );
  }

  public usuarioGetService() : Observable<Array<Usuario>> {
    return this.http.get<Array<Usuario>>(`${this.url}usuarios`)
  }

  public buscarPorId(id : number): Observable<Usuario> {
    const url = `${this.url}usuarios/${id}`
    return this.http.get<Usuario>(url)
  }
}
