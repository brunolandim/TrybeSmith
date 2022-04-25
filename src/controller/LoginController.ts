import { NextFunction, Request, Response } from 'express';
import LoginService from '../service/loginService';
import generateToken from '../middlewares/jwt';

export default class LoginController {
  service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  login = async (req:Request, res:Response, next:NextFunction) => {
    try {
      const { password, username } = req.body;
      const result = await this.service.login(username, password);
      if (result === null) {
        return res.status(401).json({ error: 'Username or password invalid' });
      }
      const token = generateToken(username, password);

      return res.status(200).json({ token });
    } catch (e) {
      next(e);
    }
  };
}