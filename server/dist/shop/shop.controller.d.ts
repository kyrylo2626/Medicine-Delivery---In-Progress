/// <reference types="node" />
import { ShopService } from './shop.service';
export declare class ShopController {
    private readonly shopService;
    constructor(shopService: ShopService);
    get_stores(): Promise<{
        id: number;
        name: string;
    }[]>;
    get_drugs(store: object): Promise<{
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
