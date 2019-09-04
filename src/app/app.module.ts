import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RatingComponent } from './rating/rating.component';
@NgModule({
  imports:      [ 
      BrowserModule, 
      FormsModule
  ],
  declarations: [ AppComponent, RatingComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}