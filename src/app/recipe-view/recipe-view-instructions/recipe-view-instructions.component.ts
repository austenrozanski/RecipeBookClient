import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-recipe-view-instructions',
  templateUrl: './recipe-view-instructions.component.html',
  styleUrls: ['./recipe-view-instructions.component.scss']
})
export class RecipeViewInstructionsComponent {

  @Input() instructionGroups: any =
    [
      {
        name: "",
        instructions: [
          {
            description: "",
            timers: [
              {
                name: "",
                totalTimeInSeconds: 0
              }
            ]
          }
        ]
      }
    ];

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
