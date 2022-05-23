import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    this.signinForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }
  loginUser() {
    console.log(this.signinForm.value)
    this.authService.signIn(this.signinForm.value)
  }
}
