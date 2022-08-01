import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceMenuModalPage } from './place-menu-modal.page';

describe('PlaceMenuModalPage', () => {
  let component: PlaceMenuModalPage;
  let fixture: ComponentFixture<PlaceMenuModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceMenuModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceMenuModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
