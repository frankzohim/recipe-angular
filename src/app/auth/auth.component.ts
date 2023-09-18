import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLogingMode: boolean = false;
  @ViewChild('f') authenticateForm: NgForm;

  onSwitchMode() {
    this.isLogingMode = !this.isLogingMode;
  }

  onSubmit() {
    console.log(this.authenticateForm.value);
  }
}
