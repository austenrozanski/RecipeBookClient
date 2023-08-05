import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeEditTipsAndTricksComponent } from './recipe-edit-tips-and-tricks.component';

describe('RecipeEditTipsAndTricksComponent', () => {
  let component: RecipeEditTipsAndTricksComponent;
  let fixture: ComponentFixture<RecipeEditTipsAndTricksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeEditTipsAndTricksComponent]
    });
    fixture = TestBed.createComponent(RecipeEditTipsAndTricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
