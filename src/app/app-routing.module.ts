import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {RecipeBrowserComponent} from "./recipe-browser/recipe-browser.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeViewComponent} from "./recipe-view/recipe-view.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recipe-view', component: RecipeViewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'recipe-browser', component: RecipeBrowserComponent },
  { path: 'recipe-edit', component: RecipeEditComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
