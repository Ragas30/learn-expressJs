import { orderService } from "../services/orderService.js";

export class orderController {
  static async createOrder(req, res, next) {
    try {
      const data = req.body;
      const result = await orderService.create(data);
      res.status(200).json({
        succes: true,
        message: "Order req creaetd successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}
