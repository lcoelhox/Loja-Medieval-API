import express from 'express';
import productRouter from './routes/productRouter';
import userRouter from './routes/usersRouter';
import orderRouter from './routes/orderRouter';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
