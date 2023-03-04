import { Injectable } from '@nestjs/common';
import { Product } from '../models/Product';

@Injectable()
export class ProductsService {
  private counter = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'description 1',
      price: 1000,
      stock: 10,
      image: '',
    },
  ];
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    return this.products.find((p) => p.id == id);
  }
  create(product: Product) {
    this.counter = this.counter + 1;
    product.id = this.counter;
    return this.products.push(product);
  }
}
