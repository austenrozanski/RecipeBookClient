import {Component, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe-view-sidebar',
  templateUrl: './recipe-view-sidebar.component.html',
  styleUrls: ['./recipe-view-sidebar.component.scss']
})
export class RecipeViewSidebarComponent {
  @Input() author = '';
  @Input() link = '';
  @Input() prepTimeInSeconds = 0;
  @Input() cookTimeInSeconds = 0;
  @Input() totalTimeInSeconds = 0;

  constructor(private http: HttpClient, private router: Router) {}

  onBack() {
    this.router.navigate(['/recipe-browser']);
  }

  formatTime(totalSeconds: number) : string {

    // Less than one minute
    if (totalSeconds < 60)
    {
      return totalSeconds + " sec";
    }

    // Less than one hour
    if (totalSeconds < 3600)
    {
      var minutes = +((totalSeconds / 60).toFixed(2));
      return minutes + " min";
    }

    var hours = +((totalSeconds / 3600).toFixed(2));
    return hours + " hrs";
  }

}
