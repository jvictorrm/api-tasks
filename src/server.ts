import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import V1Routes from './app/v1/routes/V1Routes';
import './database/connection';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1', V1Routes);

app.listen(process.env.PORT || 3334);
