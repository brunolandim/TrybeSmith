import OrderModel from '../models/orders';

export default class OrderService {
  Model: OrderModel;

  constructor() { this.Model = new OrderModel(); }

  list = async () => {
    const result = await this.Model.list();
    
    return result;
  };
}