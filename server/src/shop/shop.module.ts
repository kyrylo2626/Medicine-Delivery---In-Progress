import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  providers: [PrismaService, ShopService],
  controllers: [ShopController]
})
export class ShopModule {}
