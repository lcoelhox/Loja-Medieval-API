import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product, IProduct, ProductAll } from '../interfaces';

export default class ProductModel {
  public connection : Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async createProduct(product: IProduct): Promise<Product> {
    const { name, amount } = product;
  
    const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
    const values = [name, amount];
  
    const [result] = await this.connection.execute<ResultSetHeader>(query, values);
    const { insertId: id } = result;
    
    const newProduct: Product = { id, name, amount };
    console.log(newProduct);
    return newProduct;
  }

  public async getAllProducts(): Promise<ProductAll[]> {
    const query = 'SELECT * FROM Trybesmith.products';

    const [result] = await this.connection.execute(query);
    
    return result as ProductAll[];
  }
}
