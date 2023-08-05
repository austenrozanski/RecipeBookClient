import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIngredientEditComponent } from './recipe-ingredient-edit.component';

describe('RecipeIngredientEditComponent', () => {
  let component: RecipeIngredientEditComponent;
  let fixture: ComponentFixture<RecipeIngredientEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeIngredientEditComponent]
    });
    fixture = TestBed.createComponent(RecipeIngredientEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
