import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeViewHistoryComponent } from './recipe-view-history.component';

describe('RecipeViewHistoryComponent', () => {
  let component: RecipeViewHistoryComponent;
  let fixture: ComponentFixture<RecipeViewHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeViewHistoryComponent]
    });
    fixture = TestBed.createComponent(RecipeViewHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
