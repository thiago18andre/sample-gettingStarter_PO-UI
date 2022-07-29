import { Component } from '@angular/core';

import { PoMenuItem, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) },
    { label: 'Teste', action: this.teste.bind(this) }
  ];

  public colunas!: PoTableColumn[]; 
  public produtos: any[] = [{codigo:"Produto 1", descricao: "Game Pad PG9023", tipo: "PA"}]

  ngOnInit() {
    this.colunas = [
      {
        property: 'codigo',
        label: 'Codigo do Produto'
      },
      {
        property: 'descricao',
        label: 'Descricao do Produto'
      },
      {
        property: 'tipo',
        label: 'Tipo do Produto'
      }
  ];
  }

  private onClick() {
    alert('Clicked in menu item')
  }

  teste(): void{
    alert('Cliquei no teste menu')
  }

}
