import prismaClient from "../app/database.js";

export class orderService {
  static async create(request) {
    const order = await prismaClient.order.create({
      data: request,
      include: {
        product: {
          select: {
            price: true,
            quantity: true,
          },
        },
      },
    });

    return order;
  }
}
