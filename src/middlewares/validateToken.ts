import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IjwtPayload } from '../interfaces/interfaces';
import UserService from '../service/userService';

const SECRET = 'SECRET';
const service = new UserService();

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  try {
    if (!token) {
      return res.status(401).json({ error: 'Token not found' }); 
    }
      
    const decoded = jwt.verify(token, SECRET) as IjwtPayload;

    const getAllUsers = await service.list();
      
    const verifyUser = getAllUsers.find((u) => u.username === decoded.username);

    if (!verifyUser) throw new Error(); 

    res.locals.jwt = verifyUser;

    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export default validateToken;