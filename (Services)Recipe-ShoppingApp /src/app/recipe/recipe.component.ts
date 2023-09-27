import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipeService.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
})
export class RecipeComponent implements OnInit {
  selectedRecipe: Recipe | null = null;
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.selctedRecipe.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
