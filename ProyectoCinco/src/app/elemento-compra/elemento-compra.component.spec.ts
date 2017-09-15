import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoCompraComponent } from './elemento-compra.component';

describe('ElementoCompraComponent', () => {
  let component: ElementoCompraComponent;
  let fixture: ComponentFixture<ElementoCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementoCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
