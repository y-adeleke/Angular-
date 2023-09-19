import { Component, OnInit } from '@angular/core';
import { Ingridients } from '../shared/ingridients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [],
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingridients[] | undefined;
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit() {
    this.ingridients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (curItem: Ingridients[]) => {
        this.ingridients = curItem;
      }
    );
  }
}
