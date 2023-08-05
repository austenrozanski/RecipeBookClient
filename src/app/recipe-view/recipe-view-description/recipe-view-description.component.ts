import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-view-description',
  templateUrl: './recipe-view-description.component.html',
  styleUrls: ['./recipe-view-description.component.scss']
})
export class RecipeViewDescriptionComponent {
  descriptionSections: any = [
    {name: "First Section", content: "test content for the first section"},
    {name: "Second Section", content: "test content for the second section"},
  ]
}
