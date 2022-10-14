import { Router } from 'express';

import { MainConttroller } from '@controllers/main.controller';

import { ShorteningRouter } from './shortenings.routes';
import { ShorteningConttroller } from '@controllers/shortenings.controller';

const routes = Router();

const controller = MainConttroller.get();

const shortening = ShorteningConttroller.get();

/**
 * - Path: "/"
 */
routes.get('/', controller.root);

routes.get('/r/:hash', shortening.renderSharing);

/**
 * - Path: "/shortenings"
 */
routes.use('/shortenings', ShorteningRouter);

export { routes };
