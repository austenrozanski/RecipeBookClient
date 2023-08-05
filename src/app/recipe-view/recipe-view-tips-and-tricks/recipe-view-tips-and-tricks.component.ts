import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-view-tips-and-tricks',
  templateUrl: './recipe-view-tips-and-tricks.component.html',
  styleUrls: ['./recipe-view-tips-and-tricks.component.scss']
})
export class RecipeViewTipsAndTricksComponent {
  tipsAndTricksSections: any = [
    {name: "First Section", content: "test content for the first section"},
    {name: "Second Section", content: "test content for the second section"},
  ]
}
