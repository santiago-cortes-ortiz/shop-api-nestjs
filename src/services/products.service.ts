import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from 'src/dtos/product.dto';
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
    const product = this.products.find((p) => p.id == id);
    if (!product) {
      throw new NotFoundException(`Product with #${id} not found`);
    }
    return product;
  }
  create(product: CreateProductDto) {
    this.counter = this.counter + 1;
    const newProduct = {
      id: this.counter,
      ...product,
    };
    return this.products.push(newProduct);
  }
  update(id: number, product: Product) {
    const productToUpdate = this.findOne(id);
    if (productToUpdate) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...productToUpdate,
        ...product,
      };
      return this.products[index];
    }
    return null;
  }
  deleteProduct(id: number) {
    const index = this.products.findIndex((p) => p.id == id);
    if (index === -1) {
      throw new NotFoundException(`Product with #${id} not found`);
    }
    delete this.products[index];
  }
}
