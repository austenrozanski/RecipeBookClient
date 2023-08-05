import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe-edit-sidebar',
  templateUrl: './recipe-edit-sidebar.component.html',
  styleUrls: ['./recipe-edit-sidebar.component.scss']
})
export class RecipeEditSidebarComponent {
  author = "test";
  link = "";
  constructor(private http: HttpClient, private router: Router) {}

  onBack() {
    this.router.navigate(['/recipe-browser']);
  }
}
