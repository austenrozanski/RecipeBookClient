import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeEditDescriptionComponent } from './recipe-edit-description.component';

describe('RecipeEditDescriptionComponent', () => {
  let component: RecipeEditDescriptionComponent;
  let fixture: ComponentFixture<RecipeEditDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeEditDescriptionComponent]
    });
    fixture = TestBed.createComponent(RecipeEditDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
