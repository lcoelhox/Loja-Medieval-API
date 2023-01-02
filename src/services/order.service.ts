import connection from '../models/connection';
import OrderModel from '../models/order.model';
import { OrderAll } from '../interfaces';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAllOrders(): Promise<OrderAll[]> {
    const allOrders = await this.model.getAllOrders();
    return allOrders as OrderAll[];
  }
}