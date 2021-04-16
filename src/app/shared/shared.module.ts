import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginStatusModalComponent } from './login-status-modal/login-status-modal.component';
@NgModule({
  declarations: [
    ToolbarComponent,
    LoginStatusModalComponent
  ],
  exports: [
    ToolbarComponent,
    LoginStatusModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
