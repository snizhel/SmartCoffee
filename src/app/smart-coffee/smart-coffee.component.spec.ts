import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCoffeeComponent } from './smart-coffee.component';

describe('SmartCoffeeComponent', () => {
  let component: SmartCoffeeComponent;
  let fixture: ComponentFixture<SmartCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartCoffeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
