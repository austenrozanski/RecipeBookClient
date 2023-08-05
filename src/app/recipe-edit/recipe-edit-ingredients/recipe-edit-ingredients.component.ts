import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-edit-ingredients',
  templateUrl: './recipe-edit-ingredients.component.html',
  styleUrls: ['./recipe-edit-ingredients.component.scss']
})
export class RecipeEditIngredientsComponent {
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
