import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeViewSidebarComponent } from './recipe-view-sidebar.component';

describe('RecipeViewSidebarComponent', () => {
  let component: RecipeViewSidebarComponent;
  let fixture: ComponentFixture<RecipeViewSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeViewSidebarComponent]
    });
    fixture = TestBed.createComponent(RecipeViewSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
