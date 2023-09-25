import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: RecipeListComponent,
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRpoutingModule {}
