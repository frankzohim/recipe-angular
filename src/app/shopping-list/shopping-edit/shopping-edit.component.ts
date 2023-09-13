import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  ingredient: Ingredient;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.editItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editItem.name,
          quantity: this.editItem.quantity,
        });
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onSubmitIngredient(form: NgForm) {
    console.log(form);
    this.ingredient = new Ingredient(form.value.name, form.value.quantity);
    this.editMode
      ? this.shoppingListService.updateIngredient(
          this.editItemIndex,
          this.ingredient
        )
      : this.shoppingListService.onIngredientCreated(this.ingredient);
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete(){
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }
}
