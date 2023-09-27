import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipeService.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | undefined;
  id: number | undefined;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToList() {
    this.recipeService.addToShoppingListService(this.recipe?.ingredients);
  }
  onRecipeEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  deleteRecipe() {
    if (confirm('Are you sure?')) {
      this.recipeService.deleteRecipe(this.id);
    }
    this.router.navigate(['/recipes']);
  }
}
