import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddToCart } from './add-to-cart.page';


describe('AddToCart', () => {
  let component: AddToCart;
  let fixture: ComponentFixture<AddToCart>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToCart ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
