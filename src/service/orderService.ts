import { IOrder } from '../interfaces/interfaces';
import OrderModel from '../models/orders';
import ProductModel from '../models/products';
import UserModel from '../models/user';

export default class OrderService {
  Model: OrderModel;

  productModel:ProductModel;

  userModel: UserModel;

  constructor() { 
    this.Model = new OrderModel(); 
    this.userModel = new UserModel();
    this.productModel = new ProductModel();
  }

  list = async ():Promise<IOrder[]> => {
    const result = await this.Model.list();
    
    return result;
  };

  createOrder = async (updateProduct:number[], username:number) => {
    const order = await this.Model.createOrder(username);
    const { id, userId } = order;

    if (!id || !userId) throw new Error('ocorreu um erro na requisição');

    updateProduct.forEach(async (product) => {
      await this.productModel.update(id, product);
    });
  
    return { userId, updateProduct };
  };
}