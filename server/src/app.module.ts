import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopModule } from './shop/shop.module';
import { DatabaseModule } from './database/database.module';
import { ShopController } from './shop/shop.controller';
import { ShopService } from './shop/shop.service';
import { CartModule } from './cart/cart.module';
import { CartController } from './cart/cart.controller';
import { CartService } from './cart/cart.service';

@Module({
  imports: [CartModule, ShopModule, DatabaseModule],
  controllers: [CartController, ShopController, AppController],
  providers: [CartService, ShopService, AppService],
})
export class AppModule {}
