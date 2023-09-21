import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './shared/footer/footer.component';
import { HeaderLoginComponent } from './shared/header-login/header-login.component';
import { HomeComponent } from './pages/login/home/home.component';
import { EntrarComponent } from './pages/login/entrar/entrar.component';
import { ComprarComponent } from './pages/principal/comprar/comprar.component';
import { ListarComponent } from './pages/principal/listar/listar.component';
import { HeaderPrincipalComponent } from './shared/header-principal/header-principal.component';
import { CadastrarPrincipalComponent } from './pages/principal/cadastrar-principal/cadastrar-principal.component';
import { CadastrarLoginComponent } from './pages/login/cadastrar-login/cadastrar-login.component';
import { ComprarItemComponent } from './pages/principal/comprar-item/comprar-item.component';
import { EditarItemComponent } from './pages/principal/editar-item/editar-item.component';
import { ExcluirItemComponent } from './pages/principal/excluir-item/excluir-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastrarPagamentoComponent } from './pages/principal/cadastrar-pagamento/cadastrar-pagamento.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    FooterComponent,
    HomeComponent,
    HeaderLoginComponent,
    ComprarComponent,
    ListarComponent,
    HeaderPrincipalComponent,
    CadastrarPrincipalComponent,
    CadastrarLoginComponent,
    ComprarItemComponent,
    EditarItemComponent,
    ExcluirItemComponent,
    CadastrarPagamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
