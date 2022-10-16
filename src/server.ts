import 'dotenv/config';

import { PORT, DOMAIN } from '@config/env.config';
import { app } from './app/app';

/**
 * Normalize port
 */
const _PORT = Number.parseInt(PORT, 10) || 3333;

app.listen(_PORT, () => {
  console.log(`\nHOST: ${DOMAIN}\nPORT: ${_PORT}`);
});
