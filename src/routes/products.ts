import { Router } from 'express';
import ProductController from '../controller/ProductController';
import { ValidateAmount, ValidateName } from '../middlewares/validateProduct';

const productRouter = Router();
const Products = new ProductController();

productRouter.get('/', Products.list);

productRouter.post('/', ValidateName, ValidateAmount, Products.create);

export default productRouter;