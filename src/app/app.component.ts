import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public data = [];

  constructor(public _dataService: DataService) {
    this.data = this._dataService.getData();
  }

  alterarMarcacao(item, tipo, valor, index) {

    if (tipo === 1) {
      item.marcado1 = valor;
    } else {
      item.marcado2 = valor;
    }

    this._dataService.atualizarRegistro(item, index);
    
  }
}