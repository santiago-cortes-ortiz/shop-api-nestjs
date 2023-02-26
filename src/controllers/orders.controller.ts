import { Body, Controller, Param, Post, Put, Delete } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
    @Post()
    create(@Body() payload: any) {
        return { mensaje: 'orden creado', payload };
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
