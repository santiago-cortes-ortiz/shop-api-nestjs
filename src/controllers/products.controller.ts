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
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ): string {
    return `products limit: ${limit} offset: ${offset} brand: ${brand}`;
  }

  @Get('/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId') productId: string): { message: string } {
    return {
      message: `product ${productId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return { mensaje: 'producto creado', payload };
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
