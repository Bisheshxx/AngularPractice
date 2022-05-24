import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    
   }
 
  ngOnInit(): void {
    this.BuildForm()
  }
  registerUser(){
    console.log(this.signUpForm)
    this.authService.signUp(this.signUpForm.value).subscribe((data)=>{
      if(data.result){
        console.log(data.result)
        this.signUpForm.reset()
        this.router.navigate(['user/log-in'])
      }
    })
  }
  BuildForm(){
    this.signUpForm = this.fb.group({
      name:[undefined,[Validators.required,Validators.minLength(10)]],
      email:[undefined,[Validators.required,Validators.minLength(10),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      mobile:[undefined,[Validators.required,Validators.minLength(10)]],
      password:[undefined,[Validators.required,Validators.minLength(8)]]
    })
  }

}
