import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Request, Response } from 'express';
import helmet from 'helmet';
import { corsOptions } from './config/config';
import notFound from './middlewares/notFound';

export const app = express();

// middlewares
app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(helmet());
app.use(cookieParser());

// routes
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

// app.use('/api/v1', router);

// Not Found Handler [should be after all routes]
app.use(notFound);

// Global Error Handler [Always should be not found handlers]
// app.use(globalErrorHandler);
