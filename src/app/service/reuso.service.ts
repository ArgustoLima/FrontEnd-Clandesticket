import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReusoService {

  // item o qual desaja vender no seu site no singular
  public item: string = `ticket`;

  // logo do site que vai ficar no header
  public logoHeader: string = `CLANDESTICKET`;

  // logo do site para usar na home
  public logo: string = `tickets`;

  // texto Princiapal, onde deve informar o principal fator do seu site
  public textoPrincipal: string = `Venha vender ou comprar os ingressos do momento!`;

  // texto da primeira linha, onde pode falar mais coisas sobre o site
  public textoPrimeiraLinha: string = `Aqui você "pode" vender seus ingressos de shows o qual não poderá ir!`

  // texto da segunda linha, ...
  public textoSegundaLinha: string = `Perdeu a compra? aqui você pode comprar ingressos dos eventos do momento.`

  // Aqui vai o placeholder, para escrever o nome do item que deseja vender
  public placeholderNome: string = `Nome evento`

  // ..., sugerido para passar o nome da empresa, ou o dono do item
  public placeholderDono: string = `Empresa`

  // ..., sugerido para passar o local onde está sendo vendido, ou o endereço
  public placeholderEndereco: string = `Endereço`

  // Exemplo:

  // public item: string = `livro`;
  // public logoHeader: string = `SEBO.COM`;
  // public logo: string = `your library`;
  // public textoPrincipal: string = `Venha vender ou comprar os melhores livros!`;
  // public textoPrimeiraLinha: string = `No books.com você pode vender seus livros o qual já terminou de ler, e deseja pegar uma graninha.`
  // public textoSegundaLinha: string = `Aqui você pode comprar os livros qual já esgotou e não consegue achar mais!`
  // public placeholderNome: string = `Nome Livro`
  // public placeholderDono: string = `Autor(a)`
  // public placeholderEndereco: string = `Cidade`
}
