import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'Fresh lorem ipsum rem',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545',
      [
        new Ingredient('Tomato', 10),
        new Ingredient('Pepe', 14)
      ]
    ),
    new Recipe(
      'Pasta Ring',
      'Pasta description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545',
      [
        new Ingredient('Pasta', 10),
        new Ingredient('Ognion', 3)
      ]
    ),
    new Recipe(
      'Rice Pop',
      'Rice pop description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545',
      [new Ingredient('Tomato', 5), new Ingredient('Rice', 2)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number){
      return this.recipes[id];
  }
  getSelectRecipe() {}
}
