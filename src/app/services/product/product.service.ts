import { Injectable } from '@angular/core';

import products from '../../data/product/product.json';

import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
  list(): Observable<Product[]> {
    return new Observable<Product[]>(
      observable => {
        const data: Product[] = [];
        products.forEach(
          (product: any) => {
            data.push(new Product().build(product));
          }
        );
        observable.next(data);
      }
    );
  }
}
