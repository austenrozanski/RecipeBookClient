import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeViewTipsAndTricksComponent } from './recipe-view-tips-and-tricks.component';

describe('RecipeViewTipsAndTricksComponent', () => {
  let component: RecipeViewTipsAndTricksComponent;
  let fixture: ComponentFixture<RecipeViewTipsAndTricksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeViewTipsAndTricksComponent]
    });
    fixture = TestBed.createComponent(RecipeViewTipsAndTricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
