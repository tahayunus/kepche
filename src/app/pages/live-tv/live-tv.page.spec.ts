import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTvPage } from './live-tv.page';

describe('LiveTvPage', () => {
  let component: LiveTvPage;
  let fixture: ComponentFixture<LiveTvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveTvPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveTvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
