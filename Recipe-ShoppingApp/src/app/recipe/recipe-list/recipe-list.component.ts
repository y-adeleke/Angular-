import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeClicked = new EventEmitter<Recipe | null>();
  recipes: Recipe[] = [
    new Recipe(
      'Jollof Rice',
      'just my favorite food',
      'https://data.thefeedfeed.com/static/2021/01/16/16108398506003772a3354c/630x630.jpg'
    ),
    new Recipe(
      'White Rice',
      'just my favorite food',
      'https://data.thefeedfeed.com/static/2021/01/16/16108398506003772a3354c/630x630.jpg'
    ),
  ];

  clickedRecipe(recipe: Recipe | null) {
    this.recipeClicked.emit(recipe);
  }
}
