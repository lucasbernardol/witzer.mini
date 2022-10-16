import { env } from 'process';

type Env = NodeJS.ProcessEnv & {
  DOMAIN: string;
};

export const { DOMAIN } = env as Env;
