import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private _productService: ProductsService) {}
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ): any {
    // return `products limit: ${limit} offset: ${offset} brand: ${brand}`;
    return this._productService.findAll();
  }

  @Get('/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    return this._productService.findOne(productId);
  }

  @Post()
  create(@Body() payload: any) {
    return this._productService.create(payload);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() payload: any) {
    return this._productService.update(id, payload);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    this._productService.deleteProduct(id);
  }
}
