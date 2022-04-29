import { NextFunction, Request, Response } from 'express';
import OrderService from '../service/orderService';
import UserService from '../service/userService';

export default class OrderController {
  service: OrderService;

  userService: UserService;

  constructor() {
    this.service = new OrderService(); 
    this.userService = new UserService();
  }

  list = async (__req:Request, res:Response, next:NextFunction) => {
    try {
      const result = await this.service.list();

      return res.status(200).json(result);   
    } catch (e) {
      next(e);
    }
  };

  create = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const { products } = req.body;
      const findUser = res.locals.jwt;

      await this.service.createOrder(products, findUser.id);

      return res.status(201).json(
        { order: {
          userId: findUser.id,
          products,
        } },
      );
    } catch (error) {
      next();
    }
  };
}