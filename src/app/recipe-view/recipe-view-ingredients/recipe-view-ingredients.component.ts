import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-recipe-view-ingredients',
  templateUrl: './recipe-view-ingredients.component.html',
  styleUrls: ['./recipe-view-ingredients.component.scss']
})
export class RecipeViewIngredientsComponent {

  @Input() ingredientGroups: any =
    [
      {
        name: "",
        ingredients: [
          {
            name: "",
            quantity: null,
            quantityType: ""
          }
        ]
      }
    ];

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
