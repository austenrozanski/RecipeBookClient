import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  title = 'recipe-book-client';
  users: any;

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
            {name: "test", timeInSeconds: 10}
          ]},
        {index: 6, description: "Cook for 2 more minutes and remove from pan."},
      ]},
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5114/api/users').subscribe({
      next: response => this.users = response,
      error: err => console.log(err),
      complete: () => console.log('Request completed')
    });
  }
}