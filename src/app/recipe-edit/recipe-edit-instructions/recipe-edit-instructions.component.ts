import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-edit-instructions',
  templateUrl: './recipe-edit-instructions.component.html',
  styleUrls: ['./recipe-edit-instructions.component.scss']
})
export class RecipeEditInstructionsComponent {
  instructionSections: any = [
    {name: "Sandwich", instructions: [
        {index: 1, description: "Melt butter in microwave."},
        {index: 2, description: "While melting butter, heat pan over stove on medium heat."},
        {index: 3, description: "Brush bread slices with butter."},
        {index: 4, description: "Place 2 slices of cheese between 2 slices of bread and put into pan."},
        {index: 5, description: "Flip after 2 minutes or when golden brown."},
        {index: 6, description: "Cook for 2 more minutes and remove from pan."},
      ]},
    {name: "Sauce", instructions: [
        {index: 1, description: "Melt butter in microwave."},
        {index: 2, description: "While melting butter, heat pan over stove on medium heat."},
        {index: 3, description: "Brush bread slices with butter."},
        {index: 4, description: "Place 2 slices of cheese between 2 slices of bread and put into pan."},
        {index: 5, description: "Flip after 2 minutes or when golden brown.", stepTimers: [
            {name: "test", timeInSeconds: 10},
            {name: "test2", timeInSeconds: 20}
          ]},
        {index: 6, description: "Cook for 2 more minutes and remove from pan."},
      ]},
  ];
}
