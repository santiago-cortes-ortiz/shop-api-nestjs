import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

    @Get('categories/:id/products/:productId')
    getCategory(@Param('productId') productId: string
        , @Param('id') id: string): string {
        return `product ${productId} and category ${id}`;
    }

    @Post()
    create(@Body() payload: any) {
        return { mensaje: 'categoria creado', payload };
    }

}
