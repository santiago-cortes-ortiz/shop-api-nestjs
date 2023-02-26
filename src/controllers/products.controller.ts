import { Controller, Get, Param, Post, Query, Body, Put, Delete } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Get()
    getProducts(
        @Query('limit') limit: number = 100,
        @Query('offset') offset: number = 0,
        @Query('brand') brand: string
    ): string {
        return `products limit: ${limit} offset: ${offset} brand: ${brand}`;
    }

    @Get('/:productId')
    getProduct(@Param('productId') productId: string): string {
        return `product ${productId}`;
    }

    @Post()
    create(@Body() payload: any) {
        return { mensaje: 'producto creado', payload };
    }

    @Put('/:id')
    update(@Param('id') id: number, @Body() payload: any) {
        return {
            id,
            payload
        };

    }

    @Delete('/:id')
    delete(@Param('id') id: number) {
        return {
            id
        };
    }

}
