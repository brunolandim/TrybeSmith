import { Router } from 'express';
import OrderController from '../controller/OrderController';
import { ValidateProduct } from '../middlewares/validateProduct';
import validateToken from '../middlewares/validateToken';

const orderRouter = Router();
const orderController = new OrderController();

orderRouter.get('/', orderController.list);
orderRouter.post('/', validateToken, ValidateProduct, orderController.create);

export default orderRouter;