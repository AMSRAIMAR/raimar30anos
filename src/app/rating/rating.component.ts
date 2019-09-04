import { Component, Output, Input, HostListener, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'rating-component',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnChanges {

  @Input()
  marcado;

  @Output()
  public change = new EventEmitter<boolean>();

  colorFill = "white";

  @HostListener('mouseup', ['$event']) onClick($event) {
    if (this.colorFill == 'white') {
      this.colorFill = 'yellow';
      this.change.emit(true);
    } else {
      this.colorFill = 'white';
      this.change.emit(false);
    }
  }

  ngOnChanges() {
    if (this.marcado) {
      this.colorFill = 'yellow';
    } else {
      this.colorFill = 'white';
    }
  }

}
