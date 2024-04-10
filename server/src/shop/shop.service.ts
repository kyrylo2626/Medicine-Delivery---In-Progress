import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ShopService {

    constructor(private prisma: PrismaService) {}

    async get_stores() {
        const result = await this.prisma.stores.findMany({select: { id: true, name: true }});
        return result;
    }

    async get_drugs(store) {
        let drugs = await this.prisma.drugs.findMany({ where: { store: store.id } });
        drugs.forEach(element => {
            const base64String = Buffer.from(element.image).toString('base64');
            Object.defineProperty(element, 'image', { value: base64String })
        })
        const stores = await this.get_stores();
        return {drugs: drugs, stores: stores};
    }

}
