import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingridients } from '../shared/ingridients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingridients: Ingridients[] | undefined;
  private igChangeSub: Subscription | undefined;
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit() {
    this.ingridients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (curItem: Ingridients[]) => {
        this.ingridients = curItem;
      }
    );
  }
  ngOnDestroy(): void {
    this.igChangeSub?.unsubscribe();
  }
}
