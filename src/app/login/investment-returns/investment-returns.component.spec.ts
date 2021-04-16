import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentReturnsComponent } from './investment-returns.component';

describe('InvestmentReturnsComponent', () => {
  let component: InvestmentReturnsComponent;
  let fixture: ComponentFixture<InvestmentReturnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentReturnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
