import {Product} from "../product/product";

export class Lines {
  ProductId!: number;
  Product!: Product;
  Units!: number;

  build(content: any): Lines {
    Object.assign(this, content);

    return this;
  }
}
