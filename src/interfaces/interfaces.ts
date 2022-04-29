export interface Product {
  id?: number,
  name: string,
  amount: string,
  orderId: number,
}
  
export interface IUser {
  id?:number,
  username: string,
  classe: string,
  level: number,
  password: string
}
  
export interface IOrder {
  id?: number,
  userId?:number,
  products?:number[] | string,
}
  
export interface ILogin {
  username:string,
  password:string,
}

export interface IjwtPayload {
  username:string,
  password:string,
}
export interface IUserId {
  id:number
}
