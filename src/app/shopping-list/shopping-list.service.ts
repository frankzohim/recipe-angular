import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Orange', 7),
  ];

  ingredientsUpdated = new Subject<void>();
  getIngredients() {
    return this.ingredients.slice();
  }

  onIngredientCreated(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsUpdated.next();
  }

  onClickToShoppingList(ingredientList: Ingredient[]) {
    this.ingredients.push(...ingredientList);
    this.ingredientsUpdated.next();
  }
}
