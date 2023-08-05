import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-edit-timer',
  templateUrl: './recipe-edit-timer.component.html',
  styleUrls: ['./recipe-edit-timer.component.scss']
})
export class RecipeEditTimerComponent {
  name = "";
  timeInSeconds = 10;
}
