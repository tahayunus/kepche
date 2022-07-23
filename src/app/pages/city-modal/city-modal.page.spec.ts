import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityModalPage } from './city-modal.page';

describe('CityModalPage', () => {
  let component: CityModalPage;
  let fixture: ComponentFixture<CityModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
