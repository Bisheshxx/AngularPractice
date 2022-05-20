import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductsComponent implements OnInit {
  ProductID:number
  constructor(private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.productService.currentProductId.subscribe(data=>this.ProductID=data)
  }

}
