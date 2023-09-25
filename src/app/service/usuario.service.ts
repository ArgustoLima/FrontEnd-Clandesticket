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

  constructor(private http: HttpClient) { }

  public usuarioPostService (
    nome: string,
    cpf: string,
    senha: string,
    repetirsenha: string
    ): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}usuarios`, {
      nome: nome,
      cpf: cpf,
      senha: senha,
      repetirsenha: repetirsenha,
    }). pipe (
      res => res,
      error => error,
    );
  }

  usuarioGetService(id: number) : Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}usuarios/${id}`)
  }
}
