import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeViewInstructionsComponent } from './recipe-view-instructions.component';

describe('RecipeViewInstructionsComponent', () => {
  let component: RecipeViewInstructionsComponent;
  let fixture: ComponentFixture<RecipeViewInstructionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeViewInstructionsComponent]
    });
    fixture = TestBed.createComponent(RecipeViewInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
