import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingridients } from '../shared/ingridients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  selctedRecipe = new EventEmitter<Recipe | null>();

  private recipes: Recipe[] = [
    new Recipe(
      'Jollof Rice',
      'just my favorite food',
      'https://data.thefeedfeed.com/static/2021/01/16/16108398506003772a3354c/630x630.jpg',
      [new Ingridients('pepper', 10), new Ingridients('rice', 45)]
    ),
    new Recipe(
      'White Rice',
      'just my favorite food',
      'https://data.thefeedfeed.com/static/2021/01/16/16108398506003772a3354c/630x630.jpg',
      [new Ingridients('onions', 10), new Ingridients('rice', 45)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addToShoppingListService(item: Ingridients[] | undefined) {
    this.slService.AddIngredientsArr(item);
  }
}
