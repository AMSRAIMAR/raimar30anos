import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  public data = [];

  constructor(public _dataService: DataService){
    this.data = this._dataService.getData();
  }
  
}
