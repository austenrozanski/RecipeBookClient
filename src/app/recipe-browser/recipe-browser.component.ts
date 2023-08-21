import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe-browser',
  templateUrl: './recipe-browser.component.html',
  styleUrls: ['./recipe-browser.component.scss']
})
export class RecipeBrowserComponent {

  recipes : any;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5114/api/recipes').subscribe({
      next: response => this.recipes = response,
      error: err => console.log(err),
      complete: () => console.log('Request completed')
    });
  }

  onRecipeClicked(recipeId: number) {
    this.router.navigate(['/recipe-view/' + recipeId]);
  }

  onClickedNewRecipe() {
    this.router.navigate(['/recipe-edit']);
  }
}
