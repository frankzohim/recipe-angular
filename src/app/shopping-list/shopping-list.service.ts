import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Orange', 7),
  ];

  startedEditing = new Subject<number>();
  ingredientsUpdated = new Subject<void>();

  getIngredient(index: number): Ingredient{
    return this.ingredients[index];
  }

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

  updateIngredient(index:number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsUpdated.next();
  }

  deleteIngredient(index:number){
    this.ingredients.splice(index, 1);
    this.ingredientsUpdated.next();
  }

}
