import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeEditIngredientsComponent } from './recipe-edit-ingredients.component';

describe('RecipeEditIngredientsComponent', () => {
  let component: RecipeEditIngredientsComponent;
  let fixture: ComponentFixture<RecipeEditIngredientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeEditIngredientsComponent]
    });
    fixture = TestBed.createComponent(RecipeEditIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
