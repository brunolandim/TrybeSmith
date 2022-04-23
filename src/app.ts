import express, { Express } from 'express';
import ProductController from './controller/ProductController';

const app:Express = express();

const controllerProduct = new ProductController();

app.use(express.json());

app.get('/products', controllerProduct.list);

export default app;
