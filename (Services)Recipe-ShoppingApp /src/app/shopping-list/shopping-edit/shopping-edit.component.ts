import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingridients } from 'src/app/shared/ingridients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('inputName', { static: true }) nameInputRef:
    | ElementRef
    | undefined;
  @ViewChild('inputAmount', { static: true }) amountInputRef:
    | ElementRef
    | undefined;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddItem() {
    this.shoppingListService.AddIngredients(
      new Ingridients(
        this.nameInputRef?.nativeElement.value,
        this.amountInputRef?.nativeElement.value
      )
    );
  }
}
