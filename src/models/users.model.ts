import { Pool, ResultSetHeader } from 'mysql2/promise';
import { User } from '../interfaces';

export default class UsersModel {
  public connection : Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async createUser(user: User): Promise<User> {
    const { username, vocation, level, password } = user;
  
    const query = `INSERT INTO Trybesmith.users
    (username, vocation, level, password) VALUES (?, ?, ?, ?)`;
    const values = [username, vocation, level, password];
  
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, values);
    
    return { id: insertId, ...user };
  }
}