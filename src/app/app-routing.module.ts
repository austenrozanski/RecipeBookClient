import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {RecipeComponent} from "./recipe/recipe.component";
import {RecipeBrowserComponent} from "./recipe-browser/recipe-browser.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recipe', component: RecipeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'recipe-browser', component: RecipeBrowserComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
