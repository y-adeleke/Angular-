import { Injectable } from '@angular/core';
import { Ingridients } from '../shared/ingridients.model';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingridients[]>();
  private ingridients: Ingridients[] = [
    new Ingridients('Apples', 10),
    new Ingridients('Tomoto', 32),
  ];

  getIngredients() {
    return this.ingridients.slice();
  }
  AddIngredients(item: Ingridients) {
    this.ingridients.push(item);
    this.ingredientsChanged.next(this.ingridients.slice());
  }
  AddIngredientsArr(item: Ingridients[] | undefined) {
    if (typeof item !== 'undefined') {
      //this.ingridients = [...this.ingridients, ...item];
      this.ingridients.push(...item);
      this.ingredientsChanged.next(this.ingridients.slice());
    }
  }
}
