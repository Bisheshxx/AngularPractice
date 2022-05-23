import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signUpForm:FormGroup
  constructor(public fb:FormBuilder, public authService:AuthService,public router:Router ) {
    this.signUpForm = this.fb.group({
      name:[''],
      email:[''],
      mobile:[''],
      password:['']
    })
   }
 
  ngOnInit(): void {
  }
  registerUser(){
    this.authService.signUp(this.signUpForm.value).subscribe((data)=>{
      if(data.result){
        console.log(data.result)
        this.signUpForm.reset()
        this.router.navigate(['user/log-in'])
      }
    })
  }

}
