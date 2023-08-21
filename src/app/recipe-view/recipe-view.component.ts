import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss']
})
export class RecipeViewComponent {

  private routeSub: Subscription;

  recipe: any = {
    author: "",
    sourceUrl: "",
    prepTimeSeconds: 0,
    cookTimeSeconds: 0,
    totalTimeSeconds: 0,
    ingredientGroups: [
      {
        name: "",
        ingredients: [
          {
            name: "",
            quantity: null,
            quantityType: ""
          }
        ]
      }
    ],
    instructionGroups: [
      {
        name: "",
        instructions: [
          {
            description: "",
            timers: [
              {
                name: "",
                totalTimeInSeconds: 0
              }
            ]
          }
        ]
      }
    ],
    descriptionGroups: [
      {
        title: "",
        body: ""
      }
    ],
    tipsAndTricksGroups: [
      {
        title: "",
        body: ""
      }
    ]
  }

  instructionGroupsWithTimers : any = [

  ]

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {

      this.http.get('http://localhost:5114/api/recipes/' + params['id']).subscribe({
        next: response => this.recipe = response,
        error: err => console.log(err),
        complete: () => {
          console.log('Request completed');
          console.log(this.recipe);
        }
      });

      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  onClicked() {
    this.router.navigate(['/recipe-browser']);
  }
}
