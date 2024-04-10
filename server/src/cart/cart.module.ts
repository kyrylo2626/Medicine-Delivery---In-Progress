import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  providers: [PrismaService, CartService],
  controllers: [CartController]
})
export class CartModule {}
