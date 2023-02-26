import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
    @Post()
    create(@Body() payload: any) {
        return { mensaje: 'cliente creado', payload };
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
