import { Component } from '@angular/core';
import { Ingridients } from '../shared/ingridients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingridients: Ingridients[] = [
    new Ingridients('Apples', 10),
    new Ingridients('Tomoto', 32),
  ];
  constructor() {}
  onIngredientAdded(ingridient: Ingridients | undefined) {
    if (ingridient) this.ingridients.push(ingridient);
  }
}
