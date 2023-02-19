import { Body, Controller, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Post()
    create(@Body() payload: any) {
        return { mensaje: 'usuario creado', payload };
    }
}
