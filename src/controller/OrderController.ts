import { NextFunction, Request, Response } from 'express';
import OrderService from '../service/orderService';

export default class OrderController {
  service: OrderService;

  constructor() {
    this.service = new OrderService(); 
  }

  list = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const result = await this.service.list();

      res.status(200).json(result);   
    } catch (e) {
      next(e);
    }
  };
}