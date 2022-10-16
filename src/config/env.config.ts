import { env } from 'process';

type Env = NodeJS.ProcessEnv & {
  DOMAIN: string;
  PORT: string;
};

export const { DOMAIN, PORT } = env as Env;
