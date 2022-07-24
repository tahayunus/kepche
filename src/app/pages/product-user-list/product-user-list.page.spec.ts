import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUserListPage } from './product-user-list.page';

describe('ProductUserListPage', () => {
  let component: ProductUserListPage;
  let fixture: ComponentFixture<ProductUserListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductUserListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUserListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
