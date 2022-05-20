import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/products/product-service.service';
import { Category } from './Category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categoryList: Category[];
  // categoryList!: Category; not working when using category interface
  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.productService.getCategory().subscribe(data=>{
      this.categoryList=data
    })
  }
}
