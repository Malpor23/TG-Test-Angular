import { Component, OnInit } from '@angular/core';

import { Customer } from 'src/app/models/customer/customer';

import { CustomerService } from 'src/app/services/customer/customer.service';
import { SaleService } from "../../../services/sale/sale.service";
import { Sale } from "../../../models/sale/sale";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers!: Customer[];
  filterCustomer!: Customer[];
  sales!: Sale[];
  filterText;
  list = true;
  detail = false;
  tableProducts: any[] = [];
  info: any;
  saleDetail: any;
  totalPagado: number = 0;
  totalPeso: number = 0;

  constructor(
    private customerService: CustomerService,
    private saleService: SaleService
  ) {
    this.filterText = '';
    this.tableProducts = [];
  }

  ngOnInit() {
    this.customerService.list().subscribe((res) => {
      this.customers = res.sort((a, b) => (a.Name > b.Name) ? 1 : -1);
      this.filterCustomer = [...this.customers];
    },
    err => {
      console.log(err)
    });
    this.close();
  }

  onChange() {
    this.filterCustomer = this.customers.filter(
      datum => (datum.Name.toLowerCase().indexOf(this.filterText) > -1 || datum.EmailAddress.toLowerCase().indexOf(this.filterText) > -1)
    );
  }

  onDetail(data: any) {
    this.list = false;
    this.detail = true;
    this.info = data;
    this.saleService.list().subscribe((res) => {
      this.sales = res.filter((s: Sale) =>  s.CustomerId === data.CustomerId);
    });

    this.sales.forEach(item => {
      this.saleDetail = item.Lines;
    });

    this.tableProducts = this.saleDetail;

    this.tableProducts.forEach(item => {
      this.totalPagado += (item.Product.Price * item.Units);
      this.totalPeso += item.Product.Weight;
    });
  }

  close() {
    this.tableProducts = [];
    this.saleDetail = [];
    this.detail = false;
    this.list = true;
    this.totalPeso = 0;
    this.totalPagado = 0;
  }

}
