import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('products')
  getProducts(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string
  ): string {
    return `products limit: ${limit} offset: ${offset} brand: ${brand}`;
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string): string {
    return `product ${productId}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string
    , @Param('id') id: string): string {
    return `product ${productId} and category ${id}`;
  }

}
