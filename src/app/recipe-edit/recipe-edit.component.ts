import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent {
  title = 'recipe-book-client';
  users: any;

  recipeName = "Grilled Cheese"
  prepTimeInSeconds = 10
  cookTimeInSeconds = 10
  totalTimeInSeconds = 10
  author = "Austen Rozanski"
  link = ""

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

  tipsAndTricksSections: any = [
    {name: "First Section", content: "test content for the first section"},
    {name: "Second Section", content: "test content for the second section"},
  ]

  descriptionSections: any = [
    {name: "First Section", content: "test content for the first section"},
    {name: "Second Section", content: "test content for the second section"},
  ]

  reviewScore = 4.5
  reviews: any = [
    {score: 4, review: "pretty good"},
    {score: 5, review: "really good"},
  ]
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5114/api/users').subscribe({
      next: response => this.users = response,
      error: err => console.log(err),
      complete: () => console.log('Request completed')
    });
  }

  onClicked() {
    this.router.navigate(['/recipe-browser']);
  }

  onTestOutput() {
    console.log(this.ingredientSections);
  }
}
