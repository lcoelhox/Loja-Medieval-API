import jwt, { SignOptions } from 'jsonwebtoken';
import { Request, Response } from 'express';
import UserService from '../services/users.service';
import { User } from '../interfaces';

const secret = 'coelhos';
const jwtConfig = {
  expiresIn: '2d',
  algorithm: 'HS256',
};

export default class ProductController {
  constructor(private userService = new UserService()) {}

  public createUser = async (req: Request, res: Response) => { 
    const userResult = req.body as User;
    const userNew = await this.userService.createUser(userResult);
    const token = jwt.sign({ ...userNew }, secret, jwtConfig as SignOptions);
    return res.status(201).json({ token });
  };
}