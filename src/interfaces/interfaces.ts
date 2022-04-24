export interface Product {
  id?: number,
  name: string,
  amount: string,
  orderId: number,
}

export interface IUser {
  username: string,
  classe: string,
  level: number,
  password: string
}

export interface IOrder {
  id: number,
  userId:number,
  products:number[] | string,
}