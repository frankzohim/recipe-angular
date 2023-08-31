import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Orange', 7),
  ];

  ingredientsUpdated = new EventEmitter<void>();
  getIngredients() {
    return this.ingredients.slice();
  }

  onIngredientCreated(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsUpdated.emit();
  }
}
