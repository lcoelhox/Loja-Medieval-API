import { Request, Response } from 'express';
import ProductService from '../services/product.service';
import { IProduct } from '../interfaces';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public createProduct = async (req: Request, res: Response) => { 
    const productResult = req.body as IProduct;
    const productNew = await this.productService.createProduct(productResult);
    return res.status(201).json(productNew);
  };

  public getAllProducts = async (req: Request, res: Response) => { 
    const productAll = await this.productService.getAllProducts();
    return res.status(200).json(productAll);
  };
}