import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingPagePage } from './rating-page.page';

describe('RatingPagePage', () => {
  let component: RatingPagePage;
  let fixture: ComponentFixture<RatingPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
