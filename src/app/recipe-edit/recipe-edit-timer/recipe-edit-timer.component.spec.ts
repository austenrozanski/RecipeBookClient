import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeEditTimerComponent } from './recipe-edit-timer.component';

describe('RecipeEditTimerComponent', () => {
  let component: RecipeEditTimerComponent;
  let fixture: ComponentFixture<RecipeEditTimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeEditTimerComponent]
    });
    fixture = TestBed.createComponent(RecipeEditTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
