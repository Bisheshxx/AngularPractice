import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../User';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @Input() userDetails={username:"",password:""}
  signinForm: FormGroup
  constructor(public fb: FormBuilder, public authService: AuthService, public router: Router) {

  }

  ngOnInit(): void {
    this.buildForm()
  }
  loginUser() {
    this.authService.signIn(this.signinForm.value)
  }
  buildForm() {
    this.signinForm = this.fb.group({
      email: [undefined, [Validators.required,Validators.minLength(5)]],
      password: [undefined, [Validators.required,Validators.minLength(8)]]
    })
  }
}
