import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';


@Injectable()
export class CartService {
  
  constructor(private prisma: PrismaService) {}

    async post_order(order) {
      const result = await this.prisma.orders_list.create({
        data: {
          name: order.data.name,
          email: order.data.email,
          phone: order.data.phone,
          address: order.data.address,
        }
      })

      order.items.forEach(async item => {
        await this.prisma.order_items.create({
          data: {
            order_id: result.id,
            drug_id: item.id,
            count: item.order_count
          }
        })
      })
    }

}
