import { Router } from 'express';
import LoginController from '../controller/LoginController';
import { ValidateUserName, ValidatePass } from '../middlewares/validateUser';

const loginController = new LoginController();
const loginRouter = Router();

loginRouter.post('/', ValidateUserName, ValidatePass, loginController.login);

export default loginRouter;