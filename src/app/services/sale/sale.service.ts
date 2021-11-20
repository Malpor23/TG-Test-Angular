import { Injectable } from '@angular/core';

import sales from '../../data/sale/sale.json';

import { Observable } from 'rxjs';
import { Sale } from "../../models/sale/sale";

@Injectable({
    providedIn: 'root'
})
export class SaleService {

  list(): Observable<Sale[]> {
    return new Observable<Sale[]>(
      observable => {
        const data: Sale[] = [];
        sales.forEach(
          (sale: any) => {
            data.push(new Sale().build(sale));
          }
        );
        observable.next(data);
      }
    );
  }

}
