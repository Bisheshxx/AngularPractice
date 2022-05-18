import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {

  productId=0;
  data: any;
  constructor(private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedrouter.params.subscribe(a => {
      this.productId=a['id']
    })
  }

}
