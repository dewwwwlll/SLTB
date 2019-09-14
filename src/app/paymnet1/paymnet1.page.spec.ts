import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Paymnet1Page } from './paymnet1.page';

describe('Paymnet1Page', () => {
  let component: Paymnet1Page;
  let fixture: ComponentFixture<Paymnet1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Paymnet1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Paymnet1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
