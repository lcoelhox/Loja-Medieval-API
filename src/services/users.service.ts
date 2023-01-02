import connection from '../models/connection';
import UserModel from '../models/users.model';
import { User } from '../interfaces';

export default class ProductService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async createUser(user: User): Promise<User> {
    const newUser = await this.model.createUser(user);
    return newUser;
  }
}