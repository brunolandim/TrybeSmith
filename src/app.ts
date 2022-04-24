import express, { Express } from 'express';
import Products from './routes/products';
import User from './routes/user';
import Order from './routes/order';

const app:Express = express();

app.use(express.json());

app.use('/products', Products);
app.use('/users', User);
app.use('/orders', Order);

export default app;
