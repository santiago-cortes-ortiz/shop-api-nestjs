import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('categories/:id/products/:productId')
  getCategory(
    @Param('productId') productId: string,
    @Param('id') id: string,
  ): string {
    return `product ${productId} and category ${id}`;
  }

  @Post()
  create(@Body() payload: any) {
    return { mensaje: 'categoria creado', payload };
  }

  @Put(':id')
  update(@Body() payload: any, @Param('id') id: string) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      id,
    };
  }
}
