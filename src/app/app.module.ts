import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import {NgOptimizedImage} from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { RecipeBrowserComponent } from './recipe-browser/recipe-browser.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeEditSidebarComponent } from './recipe-edit/recipe-edit-sidebar/recipe-edit-sidebar.component';
import { RecipeEditIngredientsComponent } from './recipe-edit/recipe-edit-ingredients/recipe-edit-ingredients.component';
import { RecipeEditInstructionsComponent } from './recipe-edit/recipe-edit-instructions/recipe-edit-instructions.component';
import { RecipeEditTipsAndTricksComponent } from './recipe-edit/recipe-edit-tips-and-tricks/recipe-edit-tips-and-tricks.component';
import { RecipeEditDescriptionComponent } from './recipe-edit/recipe-edit-description/recipe-edit-description.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { RecipeViewSidebarComponent } from './recipe-view/recipe-view-sidebar/recipe-view-sidebar.component';
import { RecipeViewIngredientsComponent } from './recipe-view/recipe-view-ingredients/recipe-view-ingredients.component';
import { RecipeViewInstructionsComponent } from './recipe-view/recipe-view-instructions/recipe-view-instructions.component';
import { RecipeViewTipsAndTricksComponent } from './recipe-view/recipe-view-tips-and-tricks/recipe-view-tips-and-tricks.component';
import { RecipeViewDescriptionComponent } from './recipe-view/recipe-view-description/recipe-view-description.component';
import { RecipeViewReviewsComponent } from './recipe-view/recipe-view-reviews/recipe-view-reviews.component';
import { RecipeViewHistoryComponent } from './recipe-view/recipe-view-history/recipe-view-history.component';
import { RecipeViewTimerComponent } from './recipe-view/recipe-view-timer/recipe-view-timer.component';
import { RecipeEditTimerComponent } from './recipe-edit/recipe-edit-timer/recipe-edit-timer.component';

@NgModule({
  imports: [
    HttpClientModule,
    NgOptimizedImage,
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeBrowserComponent,
    RecipeEditComponent,
    RecipeEditSidebarComponent,
    RecipeEditIngredientsComponent,
    RecipeEditInstructionsComponent,
    RecipeEditTipsAndTricksComponent,
    RecipeEditDescriptionComponent,
    RecipeViewComponent,
    RecipeViewSidebarComponent,
    RecipeViewIngredientsComponent,
    RecipeViewInstructionsComponent,
    RecipeViewTipsAndTricksComponent,
    RecipeViewDescriptionComponent,
    RecipeViewReviewsComponent,
    RecipeViewHistoryComponent,
    RecipeViewTimerComponent,
    RecipeEditTimerComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
