import { Router } from 'express';

import { ShorteningConttroller } from '@controllers/shortenings.controller';

const routes = Router();

const controller = ShorteningConttroller.get();

routes.post('/', controller.create);

export { routes as ShorteningRouter };
