import { NextFunction, Request, Response } from 'express';
import ProductService from '../service/ProuctService';

export default class ProductController {
  public service:ProductService;

  constructor() {
    this.service = new ProductService();
  }

  list = async (__req:Request, res:Response, next:NextFunction) => {
    try {
      const result = await this.service.list();
    
      res.status(200).json(result);
    } catch (e) {
      next(e);
    }
  };
}