import { Injectable } from '@angular/core';
import { Ingridients } from '../shared/ingridients.model';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingridients[]>();
  startedEditing = new Subject<number>();
  private ingridients: Ingridients[] = [
    new Ingridients('Apples', 10),
    new Ingridients('Tomoto', 32),
  ];

  getIngredients() {
    return this.ingridients.slice();
  }
  getIngredient(index: number) {
    return this.ingridients[index];
  }

  updateIngredient(index: number, Ingredient: Ingridients) {
    this.ingridients[index] = Ingredient;
    this.ingredientsChanged.next(this.ingridients.slice());
  }
  deleteIngredient(index: number | any) {
    this.ingridients.splice(index, 1);
    this.ingredientsChanged.next(this.ingridients.slice());
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
