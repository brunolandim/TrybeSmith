import { Router } from 'express';
import UserController from '../controller/UserController';
import { 
  ValidateClasse, 
  ValidateLevel, ValidatePass, ValidateUserName } from '../middlewares/validateUser';

const userRouter = Router();
const userController = new UserController();

userRouter.post(
  '/', 
  ValidateClasse,
  ValidateLevel,
  ValidatePass,
  ValidateUserName,
  userController.create,
);

export default userRouter;