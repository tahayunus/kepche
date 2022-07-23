import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallTaxiPage } from './call-taxi.page';

describe('CallTaxiPage', () => {
  let component: CallTaxiPage;
  let fixture: ComponentFixture<CallTaxiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallTaxiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallTaxiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
