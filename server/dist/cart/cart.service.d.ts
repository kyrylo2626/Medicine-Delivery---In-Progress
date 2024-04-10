import { PrismaService } from 'src/database/prisma.service';
export declare class CartService {
    private prisma;
    constructor(prisma: PrismaService);
    post_order(order: any): Promise<void>;
}
