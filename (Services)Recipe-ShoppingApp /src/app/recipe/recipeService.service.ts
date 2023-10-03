import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingridients } from '../shared/ingridients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  selctedRecipe = new EventEmitter<Recipe | null>();

  /*
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
  */
  private recipes: Recipe[] = [];
  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number | undefined) {
    return this.recipes[id ? id : 0];
  }

  addToShoppingListService(item: Ingridients[] | undefined) {
    this.slService.AddIngredientsArr(item);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number | any, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number | any) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
