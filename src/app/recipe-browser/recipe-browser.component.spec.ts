import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBrowserComponent } from './recipe-browser.component';

describe('RecipeBrowserComponent', () => {
  let component: RecipeBrowserComponent;
  let fixture: ComponentFixture<RecipeBrowserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeBrowserComponent]
    });
    fixture = TestBed.createComponent(RecipeBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
