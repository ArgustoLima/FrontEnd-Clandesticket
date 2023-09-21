import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../module/usuario.module';

@Injectable({
  providedIn: 'root'
})
export class ReusoApiUsuarioService {

  private url:string = 'http://localhost:8080/';
  public emitEvent = new EventEmitter();

  constructor(private http: HttpClient) { }

  public usuarioPost (
    valueNome: string,
    valueCpf: string,
    valueSenha: string,
    valueRepetirsenha: string
    ): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}usuarios`, {
      nome: valueNome,
      cpf: valueCpf,
      senha: valueSenha,
      repetirsenha: valueRepetirsenha,
    }). pipe (
      res => res,
      error => error,
    );
  }
}
