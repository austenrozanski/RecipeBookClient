import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-edit-tips-and-tricks',
  templateUrl: './recipe-edit-tips-and-tricks.component.html',
  styleUrls: ['./recipe-edit-tips-and-tricks.component.scss']
})
export class RecipeEditTipsAndTricksComponent {
  tipsAndTricksSections: any = [
    {name: "First Section", content: "test content for the first section"},
    {name: "Second Section", content: "test content for the second section"},
  ]
}
