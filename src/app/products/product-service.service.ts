import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {Product} from './product'
import {Category} from '../site-layout/sidebar/Category'

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  ProductId:number
  private ProductIDSource = new BehaviorSubject<number>(1)
  currentProductId = this.ProductIDSource.asObservable()
  changeProductId(id:number){
    this.ProductIDSource.next(id)
  }
  constructor(private httpClient: HttpClient) {}
  createProduct(productbody: Product):Observable<Product> {
    const baseUrl ="http://localhost:3000/products"
    return this.httpClient.post<Product>(baseUrl, productbody)
  }
  getProduct():Observable<Product[]>{
    const baseUrl ="http://localhost:3000/products"
    return this.httpClient.get<Product[]>(baseUrl)
  }
  getProductById(productId: number):Observable<Product>{
    const baseUrl ="http://localhost:3000/products/"+productId
    return this.httpClient.get<Product>(baseUrl)
  }
  updateProductById(productId: number,productBody:Product):Observable<Product>{
    const baseUrl ="http://localhost:3000/products/"+productId;
    return this.httpClient.put<Product>(baseUrl, productBody)
  }
  deleteProductById(productId: number):Observable<Product>{
    const baseUrl ="http://localhost:3000/products/"+productId
    return this.httpClient.delete<Product>(baseUrl)
  }
  searchCategoryProduct(categoryId:Category):Observable<Product[]>{
    const baseUrl ="http://localhost:3000/products?categoryId="+categoryId
    return this.httpClient.get<Product[]>(baseUrl)
  }
  searchDateProduct(date:Date):Observable<Product[]>{
    const baseUrl ="http://localhost:3000/products?category="+date
    return this.httpClient.get<Product[]>(baseUrl)
  }
  getCategory():Observable<Category[]>{
    const categoryUrl ="http://localhost:3000/categories"
    return this.httpClient.get<Category[]>(categoryUrl)
  }
}
