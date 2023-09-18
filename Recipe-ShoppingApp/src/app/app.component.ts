import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //title = 'Recipe-ShoppingApp';
  feature: string = '';

  clickedNavItem(clickedNavItem: string) {
    this.feature = clickedNavItem;
  }
}
