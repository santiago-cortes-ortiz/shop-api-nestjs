import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
    @Post()
    create(@Body() payload: any) {
        return { mensaje: 'marca creada', payload };
    }

    @Put(':id')
    update(@Body() payload: any, @Param('id') id: string) {
        return {
            id,
            payload
        };
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return {
            id
        };
    }

}
