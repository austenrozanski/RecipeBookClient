import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeEditSidebarComponent } from './recipe-edit-sidebar.component';

describe('RecipeEditSidebarComponent', () => {
  let component: RecipeEditSidebarComponent;
  let fixture: ComponentFixture<RecipeEditSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeEditSidebarComponent]
    });
    fixture = TestBed.createComponent(RecipeEditSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
