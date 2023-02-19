import { Body, Controller, Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
    @Post()
    create(@Body() payload: any) {
        return { mensaje: 'orden creado', payload };
    }
}
