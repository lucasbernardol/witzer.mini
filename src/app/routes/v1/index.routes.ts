import { Router } from 'express';

import { MainConttroller } from '@controllers/main.controller';

const routes = Router();

const controller = MainConttroller.get();

/**
 * - Path: "/"
 */
routes.get('/', controller.root);

export { routes };
