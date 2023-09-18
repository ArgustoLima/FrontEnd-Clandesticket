import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/login/home/home.component';
import { EntrarComponent } from './pages/login/entrar/entrar.component';
import { ComprarComponent } from './pages/principal/comprar/comprar.component';
import { ListarComponent } from './pages/principal/listar/listar.component';
import { CadastrarLoginComponent } from './pages/login/cadastrar-login/cadastrar-login.component';
import { CadastrarPrincipalComponent } from './pages/principal/cadastrar-principal/cadastrar-principal.component';
import { ComprarItemComponent } from './pages/principal/comprar-item/comprar-item.component';
import { EditarItemComponent } from './pages/principal/editar-item/editar-item.component';
import { ExcluirItemComponent } from './pages/principal/excluir-item/excluir-item.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'entrar', component: EntrarComponent
  },
  {
    path: 'cadastrar-login', component: CadastrarLoginComponent
  },
  {
    path: 'comprar', component: ComprarComponent
  },
  {
    path: 'cadastrar-principal', component: CadastrarPrincipalComponent
  },
  {
    path: 'listar', component: ListarComponent
  },
  {
    path: 'comprar-item', component: ComprarItemComponent
  },
  {
    path: 'editar-item', component: EditarItemComponent
  },
  {
    path: 'excluir-item', component: ExcluirItemComponent
  },
  {
    path: '**', redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
