import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipeService.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe | null = null;

  constructor(private recipeService: RecipeService) {}
  onRecipeClicked() {
    this.recipeService.selctedRecipe.emit(this.recipe);
  }
}
