import { Controller, Get, Post, Body } from '@nestjs/common';
import { CartService } from './cart.service';


@Controller('cart')
export class CartController {

  constructor(private readonly cartService: CartService) {}

    @Post()
    post_order(@Body() order: object) { return this.cartService.post_order(order) }
}
