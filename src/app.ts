import express, { Express } from 'express';
import Products from './routes/product';
import User from './routes/user';
import Order from './routes/order';
import Login from './routes/login';

const app:Express = express();

app.use(express.json());

app.use('/products', Products);
app.use('/users', User);
app.use('/orders', Order);
app.use('/login', Login);

export default app;