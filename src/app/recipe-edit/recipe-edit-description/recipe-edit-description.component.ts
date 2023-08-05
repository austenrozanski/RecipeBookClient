import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-edit-description',
  templateUrl: './recipe-edit-description.component.html',
  styleUrls: ['./recipe-edit-description.component.scss']
})
export class RecipeEditDescriptionComponent {
  descriptionSections: any = [
    {name: "First Section", content: "test content for the first section"},
    {name: "Second Section", content: "test content for the second section"},
  ]
}
