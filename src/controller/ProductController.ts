import { NextFunction, Request, Response } from 'express';
import ProductService from '../service/ProductService';

export default class ProductController {
  public service:ProductService;

  constructor() {
    this.service = new ProductService();
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
      const result = await this.service.create(req.body);
    
      return res.status(201).json({ item: result });
    } catch (e) {
      next(e);
    }
  };
}