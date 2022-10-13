import { Router } from 'express';

import { MainConttroller } from '@controllers/main.controller';

import { ShorteningRouter } from './shortenings.routes';

const routes = Router();

const controller = MainConttroller.get();

/**
 * - Path: "/"
 */
routes.get('/', controller.root);

/**
 * - Path: "/shortenings"
 */
routes.use('/shortenings', ShorteningRouter);

export { routes };
