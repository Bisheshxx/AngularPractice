import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {
  // @Input() ProductDetails  =  {id:"",categoryId:'',productName:'',description:'',rating:'',price:'',productImg:'',isAvailable:'',color:'',reviews:''}
  @Input() ProductDetails!:Product
  productId=0;
  constructor(private activatedrouter: ActivatedRoute,private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.activatedrouter.params.subscribe(data => {
      this.productId=data['id']
      this.productService.getProductById(this.productId).subscribe(data=>{
        this.ProductDetails=data
        console.log(this.ProductDetails)
      })
    })
  }
  updateProduct(data: any){
    this.productService.updateProductById(this.productId,data).subscribe(data=>console.log(data))
  }

}
