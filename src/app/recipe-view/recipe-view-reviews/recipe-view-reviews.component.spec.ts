import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeViewReviewsComponent } from './recipe-view-reviews.component';

describe('RecipeViewReviewsComponent', () => {
  let component: RecipeViewReviewsComponent;
  let fixture: ComponentFixture<RecipeViewReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeViewReviewsComponent]
    });
    fixture = TestBed.createComponent(RecipeViewReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
