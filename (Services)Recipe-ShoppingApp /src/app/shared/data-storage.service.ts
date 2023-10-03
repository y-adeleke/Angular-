import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipe/recipeService.service';
import { Recipe } from '../recipe/recipe.model';
import { tap, map, take, exhaustMap } from 'rxjs/operators';
import { OperatorFunction } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://ng-recipe-shopping-datas-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://ng-recipe-shopping-datas-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipe) => {
          return recipe.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
