import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe-view-sidebar',
  templateUrl: './recipe-view-sidebar.component.html',
  styleUrls: ['./recipe-view-sidebar.component.scss']
})
export class RecipeViewSidebarComponent {
  author = "test";
  link = "";
  constructor(private http: HttpClient, private router: Router) {}

  onBack() {
    this.router.navigate(['/recipe-browser']);
  }
}
