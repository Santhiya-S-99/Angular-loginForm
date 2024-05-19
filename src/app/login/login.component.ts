import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule, CommonModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  
  loginForm: any;

  constructor( private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required
        // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      ]],
    });
  }
  
  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      if (email === 'hr@tarkiz.info' && password === 'tarkizinfo') {
        alert('Login successful: Email and password are correct.')
        this.loginForm.reset();
      } else {
        alert('Login failed: Incorrect email or password.')
      }
    }
    else {
      this.loginForm.markAllAsTouched();
    }
  }

}
