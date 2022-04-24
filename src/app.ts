import express, { Express } from 'express';
import Products from './routes/products';
import User from './routes/user';

const app:Express = express();

app.use(express.json());

app.use('/products', Products);
app.use('/users', User);

export default app;
