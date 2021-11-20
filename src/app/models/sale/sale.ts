import { Lines } from "./lines";

export class Sale {
  SaleId!: number;
  CustomerId!: number;
  Lines!: Lines;

  build(content: any): Sale {
    Object.assign(this, content);

    return this;
  }
}
