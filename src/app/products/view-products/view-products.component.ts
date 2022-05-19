import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
productId=0;
productData:Product
  constructor(private activatedrouter: ActivatedRoute,private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.activatedrouter.params.subscribe(a => {
      this.productId=a['id']
      this.productService.getProductById(this.productId).subscribe(data=>{
        this.productData=data
      })
    })
  }

}
