import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { BrandsController } from './controllers/brands.controller';
import { OrdersController } from './controllers/orders.controller';
import { UsersController } from './controllers/users.controller';
import { CustomersController } from './controllers/customers.controller';

@Module({
  imports: [],
  controllers: [
    ProductsController,
    CategoriesController,
    BrandsController,
    OrdersController,
    UsersController,
    CustomersController,
  ],
  providers: [AppService],
})
export class AppModule {}
