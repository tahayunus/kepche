import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceMenuPage } from './place-menu.page';

describe('PlaceMenuPage', () => {
  let component: PlaceMenuPage;
  let fixture: ComponentFixture<PlaceMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
