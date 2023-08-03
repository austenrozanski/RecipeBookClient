import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import {NgOptimizedImage} from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';

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
    RecipeComponent
  ],
  bootstrap: [
    AppComponent,
    RecipeComponent
  ]
})
export class AppModule { }
