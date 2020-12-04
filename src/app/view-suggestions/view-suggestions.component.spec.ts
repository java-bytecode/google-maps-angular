import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSuggestionsComponent } from './view-suggestions.component';

describe('ViewSuggestionsComponent', () => {
  let component: ViewSuggestionsComponent;
  let fixture: ComponentFixture<ViewSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSuggestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
