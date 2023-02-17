import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    
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

}
