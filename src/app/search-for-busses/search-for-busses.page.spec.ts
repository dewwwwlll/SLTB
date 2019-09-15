import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForBussesPage } from './search-for-busses.page';

describe('SearchForBussesPage', () => {
  let component: SearchForBussesPage;
  let fixture: ComponentFixture<SearchForBussesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForBussesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForBussesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
