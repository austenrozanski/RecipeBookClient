import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe-browser',
  templateUrl: './recipe-browser.component.html',
  styleUrls: ['./recipe-browser.component.scss']
})
export class RecipeBrowserComponent {

  recipes = [
    {name: "Grilled Cheese"},
    {name: "test"},
    {name: "test"},
    {name: "test"},
  ]
  constructor(private http: HttpClient, private router: Router) {}
  onClicked() {
    this.router.navigate(['/recipe']);
  }

  onClickedNewRecipe() {
    this.router.navigate(['/recipe-edit']);
  }
}
