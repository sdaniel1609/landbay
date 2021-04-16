import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {LoginService} from './services/login-service/login.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {FormGroup} from '@angular/forms';
import {LoginStatusMessageType} from './models/login-status.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginStatusTemplate') loginStatusTemplate;
  public modalRef: BsModalRef;
  public loginStatusMessage: string;

  constructor(private loginService: LoginService, private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  public async login(loginForm: FormGroup): Promise<void>{
    if (loginForm.valid) {
      const loginResult = await this.loginService.login(loginForm.value);
      if (loginResult.loginSuccess) {
        this.loginStatusMessage = LoginStatusMessageType.Success;
        this.openModal(this.loginStatusTemplate);
      } else {
        this.loginStatusMessage = LoginStatusMessageType.IncorrectEmailPassword;
        this.openModal(this.loginStatusTemplate);
      }
    }
  }

  public openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }
}
