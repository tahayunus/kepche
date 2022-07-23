import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMapboxPage } from './map-mapbox.page';

describe('MapMapboxPage', () => {
  let component: MapMapboxPage;
  let fixture: ComponentFixture<MapMapboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapMapboxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapMapboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
