import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-layout/sidebar/Category';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-view-products-by-category',
  templateUrl: './view-products-by-category.component.html',
  styleUrls: ['./view-products-by-category.component.css']
})
export class ViewProductsByCategoryComponent implements OnInit {
  searchCategory:Category;
  ProductList:Product[];
  constructor(private activatedroute: ActivatedRoute,private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(data=>{
      this.searchCategory=data['id'];
      this.productService.searchCategoryProduct(this.searchCategory).subscribe(categoryData=>{
        this.ProductList=categoryData
      })
    })
  }

}
