import { Body, Controller, Post } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
    @Post()
    create(@Body() payload: any) {
        return { mensaje: 'marca creada', payload };
    }
}
