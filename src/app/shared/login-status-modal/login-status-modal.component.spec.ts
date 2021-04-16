import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStatusModalComponent } from './login-status-modal.component';

describe('LoginStatusModalComponent', () => {
  let component: LoginStatusModalComponent;
  let fixture: ComponentFixture<LoginStatusModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginStatusModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginStatusModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
