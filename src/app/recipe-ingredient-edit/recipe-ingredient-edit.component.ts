import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-ingredient-edit',
  templateUrl: './recipe-ingredient-edit.component.html',
  styleUrls: ['./recipe-ingredient-edit.component.css']
})
export class RecipeIngredientEditComponent {
  ingredientSections: any = [
    {name: "Sandwich", ingredients: [
        {name: "Bread", quantity: "4", quantityType: "slices"},
        {name: "Butter", quantity: "2", quantityType: "tbsp"},
        {name: "American Cheese", quantity: "4", quantityType: "slices"},
      ]},
    {name: "Sauce", ingredients: [
        {name: "Bread", quantity: "4", quantityType: "slices"},
        {name: "Butter", quantity: "2", quantityType: "tbsp"},
        {name: "American Cheese", quantity: "4", quantityType: "slices"},
      ]},
  ];
}
