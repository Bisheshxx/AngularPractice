import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private activatedrouter: ActivatedRoute,private productService:ProductServiceService,public router: Router) { }

  ngOnInit(): void {
    this.activatedrouter.params.subscribe(a => {
      this.productId=a['id']
      this.productService.getProductById(this.productId).subscribe(data=>{
        this.productData=data
      })
    })
  }
  deleteProduct(id:number){
    this.productService.changeProductId(id)
    this.productService.deleteProductById(id).subscribe(data=>console.log(data))
    this.router.navigate(['delete-products'])
  }

}
