import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signinForm: FormGroup;

  constructor(
    private authserv: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    if (this.signinForm.valid) {
      const { email, password } = this.signinForm.value;
      const test = this.authserv.login(email, password);
      if (test === true) {
        this.router.navigateByUrl('/home');
      }
    } else {
      console.log('Form is invalid');
    }
  }
}