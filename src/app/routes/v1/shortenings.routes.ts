import { Router } from 'express';

import { ShorteningConttroller } from '@controllers/shortenings.controller';

const routes = Router();

const controller = ShorteningConttroller.get();

routes.post('/', controller.create);
routes.get('/:hash', controller.sharing)

export { routes as ShorteningRouter };
