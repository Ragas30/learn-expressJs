import prismaClient from "../app/database.js";

export class ProductService{
    static async create(request){
        const product = await prismaClient.product.create({
            data: request
        });
        
        return product;
    }
}