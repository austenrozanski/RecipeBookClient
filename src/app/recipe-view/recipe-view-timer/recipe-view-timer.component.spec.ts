import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeViewTimerComponent } from './recipe-view-timer.component';

describe('RecipeViewTimerComponent', () => {
  let component: RecipeViewTimerComponent;
  let fixture: ComponentFixture<RecipeViewTimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeViewTimerComponent]
    });
    fixture = TestBed.createComponent(RecipeViewTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
