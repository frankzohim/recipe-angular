import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { DropdownDirective } from 'src/app/shared/dropdown.directive';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() recipeItem: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  toShoppingList() {
    console.log('toShoppingList');
    this.shoppingListService.onClickToShoppingList(this.recipeItem.ingredients);
  }
}
