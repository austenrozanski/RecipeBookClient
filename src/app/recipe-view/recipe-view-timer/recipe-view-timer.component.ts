import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-view-timer',
  templateUrl: './recipe-view-timer.component.html',
  styleUrls: ['./recipe-view-timer.component.scss']
})
export class RecipeViewTimerComponent {
  name = "";
  timeInSeconds = 10;
}
