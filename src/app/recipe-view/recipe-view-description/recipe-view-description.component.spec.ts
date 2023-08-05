import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeViewDescriptionComponent } from './recipe-view-description.component';

describe('RecipeViewDescriptionComponent', () => {
  let component: RecipeViewDescriptionComponent;
  let fixture: ComponentFixture<RecipeViewDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeViewDescriptionComponent]
    });
    fixture = TestBed.createComponent(RecipeViewDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
