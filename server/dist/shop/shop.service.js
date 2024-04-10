"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let ShopService = class ShopService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async get_stores() {
        const result = await this.prisma.stores.findMany({ select: { id: true, name: true } });
        return result;
    }
    async get_drugs(store) {
        let drugs = await this.prisma.drugs.findMany({ where: { store: store.id } });
        drugs.forEach(element => {
            const base64String = Buffer.from(element.image).toString('base64');
            Object.defineProperty(element, 'image', { value: base64String });
        });
        const stores = await this.get_stores();
        return { drugs: drugs, stores: stores };
    }
};
exports.ShopService = ShopService;
exports.ShopService = ShopService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ShopService);
//# sourceMappingURL=shop.service.js.map