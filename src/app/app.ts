import { resolve } from 'node:path';

import express from 'express';
import cors from 'cors';

import helmet from 'helmet';
import morgan from 'morgan';

import { routes } from '@routes/v1/index.routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(helmet());

app.use(cors());

/**
 * views
 */
app.use(express.static(resolve(__dirname, '..', '..', 'public', 'static')));

app.set('view engine', 'ejs');
app.set('views', resolve(__dirname, '..', '..', 'public', 'web', 'views'));

app.use(morgan('dev'));

app.use(routes);

export { app };
