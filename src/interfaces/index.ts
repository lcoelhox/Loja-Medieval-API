export interface IProduct {
  name: string;
  amount: string;
}

export interface Product extends IProduct {
  id: number;
}

export interface ProductAll {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface User {
  id?: number;
  username: string;
  vocation: string;
  level: number;
  password?: string;
}

export interface OrderAll {
  id?: number,
  userId: number,
  productsIds: [number],
}