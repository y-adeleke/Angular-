import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingridients } from 'src/app/shared/ingridients.model';

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
  @Output() ingredientAdded = new EventEmitter<Ingridients | undefined>();

  onAddItem() {
    this.ingredientAdded.emit(
      new Ingridients(
        this.nameInputRef?.nativeElement.value,
        this.amountInputRef?.nativeElement.value
      )
    );
  }
}
