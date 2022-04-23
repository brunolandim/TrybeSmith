import express, { Express } from 'express';
import Products from './routes/products';

const app:Express = express();

app.use(express.json());

app.use('/products', Products);

export default app;
