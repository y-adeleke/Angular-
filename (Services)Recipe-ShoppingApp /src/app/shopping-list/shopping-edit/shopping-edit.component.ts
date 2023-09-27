import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingridients } from 'src/app/shared/ingridients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm | undefined;
  subscription: Subscription | undefined;
  editmode = false;
  editedItemIndex: number | undefined;
  editedItem: Ingridients | undefined;
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index) => {
        this.editedItemIndex = index;
        this.editmode = true;
        this.editedItem = this.shoppingListService.getIngredient(
          this.editedItemIndex
        );
        this.slForm?.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  onAddItem(f: NgForm) {
    const value = f.value;
    const newIngredient = new Ingridients(value.name, value.amount);
    if (this.editmode) {
      this.shoppingListService.updateIngredient(
        this.editedItemIndex ? this.editedItemIndex : 0,
        newIngredient
      );
    } else this.shoppingListService.AddIngredients(newIngredient);
    this.editmode = false;
    this.slForm?.reset();
  }
  onClear() {
    this.editmode = false;
    this.slForm?.reset();
  }
  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
