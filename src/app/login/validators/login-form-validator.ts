import {FormGroup} from '@angular/forms';

export class LoginFormValidator {
  private static passwordRegex: RegExp = /^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/;
  static emailMatchValidator(group: FormGroup): null | {emailMismatch: boolean} {
    const email = group.get('email').value;
    const confirmEmail = group.get('confirmEmail').value;
    return email === confirmEmail ? null : { emailMismatch: true };
  }

  static passwordRule(group: FormGroup): null | {passwordRuleError: boolean} {
    const passwordRegex = /^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/;
    const password = group.get('email').value;
    return passwordRegex.test(password) ? null : {passwordRuleError: true};
  }
}
