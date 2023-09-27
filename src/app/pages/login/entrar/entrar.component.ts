import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modules/usuario.module';
import { AuthService } from 'src/app/service/auth.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent implements OnInit {

  public listaUsuarios: Usuario[] = [];
  public id: any = 2;

  constructor(
    private service: AuthService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.usuarioService.usuarioGetService().subscribe(
      res => {
        this.listaUsuarios = res
      },
      error => error,
    )

    this.usuarioService.buscarPorId(this.id).subscribe(
      error => error,
    )
  }

  public entrarPost(
    cpf: string,
    senha: string,
  ) {
    this.service.entrarPostService({
      cpf,
      senha
    }).subscribe(
      res => {
        // for(let i = 0; i < this.listaUsuarios.length; i++) {
        //   if (cpf = this.listaUsuarios[i].cpf) {
        //     console.log(this.listaUsuarios[i])
        //   }
        // }
        res = res;
      },
      error => error
    )
  }
}
