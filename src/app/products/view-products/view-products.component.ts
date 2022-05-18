import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
productId=0;
  data: any;
  constructor(private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedrouter.params.subscribe(a => {
      this.productId=a['id']
    })
  }

}
