import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { CustomerRoutingModule } from './customer-routing.module';

import { CustomerComponent } from './customer.component';
import {CustomerListComponent} from "./list/customer-list.component";

@NgModule({
  imports: [
    CustomerRoutingModule,
    SharedModule
  ],
  declarations: [CustomerComponent, CustomerListComponent],
  exports: [CustomerComponent]
})
export class CustomerModule { }
