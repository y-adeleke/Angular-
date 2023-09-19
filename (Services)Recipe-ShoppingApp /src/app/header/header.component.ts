import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  //relative path to the file in which we have our html code for header component, it
})
export class HeaderComponent {
  @Output() navClickItem = new EventEmitter<string>();

  onSelect(feature: string) {
    this.navClickItem.emit(feature);
  }
}
