import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductsByCategoryComponent } from './view-products-by-category/view-products-by-category.component';
import { ViewProductsByDateComponent } from './view-products-by-date/view-products-by-date.component';


@NgModule({
  declarations: [
    ProductsComponent,
    AddProductsComponent,
    UpdateProductsComponent,
    DeleteProductsComponent,
    ViewProductsComponent,
    ViewAllProductsComponent,
    ViewProductsByCategoryComponent,
    ViewProductsByDateComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
