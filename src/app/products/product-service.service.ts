import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Product} from './product'

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpClient: HttpClient) {}
  createProduct(productbody: any):Observable<Product> {
    const baseUrl ="http://localhost:3000/products"
    return this.httpClient.post<Product>(baseUrl, productbody)
  }
  getProduct():Observable<Product>{
    const baseUrl ="http://localhost:3000/products"
    return this.httpClient.get<Product>(baseUrl)
  }
  getProductById(productId: string):Observable<Product>{
    const baseUrl ="http://localhost:3000/products/"+productId
    return this.httpClient.get<Product>(baseUrl)
  }
  updateProductById(productId: Product,productBody:Product):Observable<Product>{
    const baseUrl ="http://localhost:3000/products/"+productId;
    return this.httpClient.put<Product>(baseUrl, productBody)
  }
  deleteProductById(productId: Product,productBody:any):Observable<Product>{
    const baseUrl ="http://localhost:3000/products/"+productId
    return this.httpClient.delete<Product>(baseUrl)
  }
  searchCategoryProduct(categoryId:number):Observable<Product>{
    const baseUrl ="http://localhost:3000/product/category="+categoryId
    return this.httpClient.get<Product>(baseUrl)
  }
  searchDateProduct(date:Date):Observable<Product>{
    const baseUrl ="http://localhost:3000/product/category="+date
    return this.httpClient.get<Product>(baseUrl)
  }
}
