import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/products/product-service.service';
import { AuthService } from 'src/app/User/user/_services/auth.service';
import { Category } from '../sidebar/Category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categoryList:Category[]
  userId;
  userData;
  constructor(private productService:ProductServiceService,public authService:AuthService,) { }

  ngOnInit() {
    this.productService.getCategory().subscribe(data=>{
      this.categoryList=data
    })
    this.userId = localStorage.getItem('id')
  }
  logOut(){
    this.authService.doLogout()
  }
}
