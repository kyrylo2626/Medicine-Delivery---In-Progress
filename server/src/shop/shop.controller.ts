import { Body, Controller, Get, Post } from '@nestjs/common';
import { ShopService } from './shop.service';

@Controller('shop')
export class ShopController {

    constructor(private readonly shopService: ShopService) {}

    @Get()
    get_stores() { return this.shopService.get_stores() }

    @Post()
    get_drugs(@Body() store: object) { return this.shopService.get_drugs(store) }

}
