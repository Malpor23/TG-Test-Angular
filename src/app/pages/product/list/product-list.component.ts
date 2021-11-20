import { Component, OnInit } from '@angular/core';

import {Product} from "../../../models/product/product";
import {ProductService} from "../../../services/product/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products!: Product[];
  filterProduct!: Product[];
  filterText;

  constructor(
    private productService: ProductService
  ) {
    this.filterText = '';
  }

  ngOnInit() {
    this.productService.list().subscribe((res) => {
      this.products = res.sort((a, b) => (a.Price > b.Price ) ? 1 : -1);
      this.filterProduct = [...this.products];
    },
    err => {
      console.log(err)
    });
  }

  onChange() {
    this.filterProduct = this.products.filter(
      datum => (datum.Name.toLowerCase().indexOf(this.filterText) > -1)
    );
  }

}
