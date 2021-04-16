import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'login-status-modal',
  templateUrl: './login-status-modal.component.html',
  styleUrls: ['./login-status-modal.component.scss']
})
export class LoginStatusModalComponent implements OnInit {
  public modalRef: BsModalRef;
  @Input() message: string;
  @Input() loginStatus: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
