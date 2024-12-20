import { ProductService } from "../services/productService.js";

export class productController {
  static async createProduct(req, res, next) {
    try {
      const data = req.body;
      const result = await ProductService.create(data);
      res.status(200).json({
        succes: true,
        message: "Product creaetd successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}
