import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeEditInstructionsComponent } from './recipe-edit-instructions.component';

describe('RecipeEditInstructionsComponent', () => {
  let component: RecipeEditInstructionsComponent;
  let fixture: ComponentFixture<RecipeEditInstructionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeEditInstructionsComponent]
    });
    fixture = TestBed.createComponent(RecipeEditInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
