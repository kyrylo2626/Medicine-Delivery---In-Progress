/// <reference types="node" />
import { PrismaService } from 'src/database/prisma.service';
export declare class ShopService {
    private prisma;
    constructor(prisma: PrismaService);
    get_stores(): Promise<{
        id: number;
        name: string;
    }[]>;
    get_drugs(store: any): Promise<{
        drugs: {
            id: number;
            name: string;
            price: number;
            count: number;
            store: number;
            image: Buffer;
        }[];
        stores: {
            id: number;
            name: string;
        }[];
    }>;
}
