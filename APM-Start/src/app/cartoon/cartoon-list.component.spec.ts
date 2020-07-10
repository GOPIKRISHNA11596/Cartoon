import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoonListComponent } from './cartoon-list.component';

describe('CartoonListComponent', () => {
  let component: CartoonListComponent;
  let fixture: ComponentFixture<CartoonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartoonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
