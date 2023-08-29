import {
  Component,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @Output() ingredientCreated = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('quantityInput') quantityInput: ElementRef;
  ingredient: Ingredient;

  onAddIngredient(e: any) {
    e.preventDefault();
    this.ingredient = new Ingredient(
      this.nameInput.nativeElement.value,
      this.quantityInput.nativeElement.value
    );
    this.ingredientCreated.emit(this.ingredient);
  }
}
