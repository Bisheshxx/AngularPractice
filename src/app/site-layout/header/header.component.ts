import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/products/product-service.service';
import { Category } from '../sidebar/Category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categoryList:Category[]
  constructor(private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.productService.getCategory().subscribe(data=>{
      this.categoryList=data
    })
  }

}
