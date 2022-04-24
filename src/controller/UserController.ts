import { Request, Response, NextFunction } from 'express';
import generateToken from '../middlewares/jwt';
import UserService from '../service/userService';

export default class UserController {
  service: UserService;

  constructor() {
    this.service = new UserService();
  }

  create = async (req:Request, res:Response, next:NextFunction) => {
    try {
      await this.service.create(req.body);

      const token = generateToken(req.body.username, req.body.password);

      return res.status(201).json({ token });
    } catch (e) {
      next(e);
    }
  };
}