import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { ProductRoutingModule } from './product-routing.module';

import { ProductComponent } from './product.component';
import {ProductListComponent} from "./list/product-list.component";

@NgModule({
  imports: [
    ProductRoutingModule,
    SharedModule
  ],
  declarations: [ProductComponent, ProductListComponent],
  exports: [ProductComponent]
})
export class ProductModule { }
