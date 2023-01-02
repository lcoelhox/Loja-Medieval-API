import { Router } from 'express';
import ProductController from '../controller/product.controller';

const router = Router();

const productController = new ProductController();

router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);

export default router;