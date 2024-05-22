import express, { Request, Response } from "express"
import { ProductController } from "./product.conrtoller";

const router = express.Router();

router.post("/products/create-product", ProductController.createProduct );
router.get("/products/", ProductController.getAllProduct);
router.get("/products/:productId", ProductController.getSingleProduct);
router.put("/products/:productId", ProductController.updateProduct);
router.delete("/products/:productId", ProductController.deleteProduct);

router.all('*', (req: Request, res: Response) => {
    res.status(404).json({
      success: false,
      message: 'Route not found',
    });
  });
  export const notFoundRouter = router;


export const ProductRouter = router;