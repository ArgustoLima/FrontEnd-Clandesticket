import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost:8080/';

  constructor(private http: HttpClient, private router: Router) { }

  public entrarPostService(payload: {cpf: string, senha: string}): Observable<any>{
    return this.http.post<{ token: string }>(`${this.url}entrar`, payload).pipe(
      map((res) => {
        localStorage.removeItem('acess_token')
        localStorage.setItem('acess_token', JSON.stringify(res.token))
        if (res.token) {
          this.router.navigate(['comprar']);
        } else {
          window.alert("Usuário ou senha incorreta!")
        }
      }),
    )
  }

  public logout() {
    localStorage.removeItem('acess_token');
    return this.router.navigate(['']);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('acess_token');
    if(!token) return false;

    const jwtHelper = new JwtHelperService();
    return !jwtHelper.isTokenExpired(token);
  }



}
