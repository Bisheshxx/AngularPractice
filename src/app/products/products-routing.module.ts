import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { ProductsComponent } from './products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductsByCategoryComponent } from './view-products-by-category/view-products-by-category.component';
import { ViewProductsByDateComponent } from './view-products-by-date/view-products-by-date.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [
  { path: '', component: ViewAllProductsComponent },
  { path: 'add-products', component: AddProductsComponent },
  { path: 'update-products/:id', component: UpdateProductsComponent },
  { path: 'delete-products', component: DeleteProductsComponent },
  { path: 'view-products/:id', component: ViewProductsComponent },
  // { path: 'view-all-products', component: ViewAllProductsComponent },
  { path: 'search', component: ViewProductsByDateComponent },  
  { path: 'category/:id', component: ViewProductsByCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
