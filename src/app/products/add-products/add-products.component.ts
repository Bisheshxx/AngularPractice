import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private productServices:ProductServiceService) { }

  ngOnInit(): void {
  }
  addNewProduct(form:any){
    console.log(form.value)
    let newProduct:Product ={
      id:(Math.floor(Math.random()*100)),
      categoryId: form.value.product_category,
      productName: form.value.product_name,
      description: form.value.product_description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productImg: form.value.category,
      isAvailable: form.value.product_available,
      color: form.value.product_color,
      reviews: form.value.product_reviews
    }
    console.log(newProduct)
    this.productServices.createProduct(newProduct).subscribe(data=>console.log(data))
  }
}
