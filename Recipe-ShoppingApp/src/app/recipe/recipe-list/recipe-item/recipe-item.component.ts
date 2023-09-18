import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe | null = null;
  @Output() recipeClicked = new EventEmitter<Recipe | null>();

  onRecipeClicked() {
    this.recipeClicked.emit(this.recipe && this.recipe);
  }
}
