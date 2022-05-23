import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../User';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser:User={}
  constructor(
    public authService:AuthService,
    private actRoute:ActivatedRoute
  ) { 
    let id = this.actRoute.snapshot.paramMap.get('id')
    this.authService.getUserProfile(id).subscribe((data)=>{
      this.currentUser=data.msg
    })
  }

  ngOnInit(): void {
  }

}
