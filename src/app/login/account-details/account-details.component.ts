import {Component, EventEmitter, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginFormValidator} from '../validators/login-form-validator';
import {passwordRuleRegex} from '../constants/constants';
@Component({
  selector: 'account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent {
  @Output() public loginEvent: EventEmitter<FormGroup> = new EventEmitter();
  public loginForm: FormGroup;
  public submitAttempted: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10), Validators.pattern(passwordRuleRegex)]],
      pin: ['', [Validators.required]],
      acceptTerms: [false, [Validators.required]],
      receiveNewsAndOffers: [false, [Validators.required]],
    }, { validators: LoginFormValidator.emailMatchValidator});
  }

  public login(): void {
    this.submitAttempted = true;
    this.loginEvent.emit(this.loginForm);
  }
}
