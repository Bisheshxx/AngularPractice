import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {
  ProductList:Array<Product>
  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(data=>{
      this.ProductList=data
      console.log(this.ProductList)
    })
  }

}
