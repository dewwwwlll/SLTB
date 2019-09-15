import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaymenyPage } from './view-paymeny.page';

describe('ViewPaymenyPage', () => {
  let component: ViewPaymenyPage;
  let fixture: ComponentFixture<ViewPaymenyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPaymenyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPaymenyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
