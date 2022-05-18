import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpClient: HttpClient) {}
  createProduct(productbody: any){
    const baseUrl ="http://localhost:3000/products"
    return this.httpClient.post(baseUrl, productbody)
  }
  getProduct(){
    const baseUrl ="http://localhost:3000/products"
    return this.httpClient.get(baseUrl)
  }
  getProductById(productId: number){
    const baseUrl ="http://localhost:3000/products/"+productId
    return this.httpClient.get(baseUrl)
  }
}
