import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('quantityInput') quantityInput: ElementRef;
  ingredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}
  onAddIngredient(e: any) {
    e.preventDefault();
    this.ingredient = new Ingredient(
      this.nameInput.nativeElement.value,
      this.quantityInput.nativeElement.value
    );
    this.shoppingListService.onIngredientCreated(this.ingredient);
  }
}
