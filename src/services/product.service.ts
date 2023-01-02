import connection from '../models/connection';
import ProductModel from '../models/product.model';
import { IProduct, ProductAll } from '../interfaces';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async createProduct(product: IProduct): Promise<IProduct> {
    // const { name, amount, id } = productParams;
    const newProduct = await this.model.createProduct(product);
    return newProduct;
  }

  public async getAllProducts(): Promise<ProductAll[]> {
    const allProduct = await this.model.getAllProducts();
    return allProduct as ProductAll[];
  }
}
