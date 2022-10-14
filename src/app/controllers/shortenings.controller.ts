import type { Request, Response, NextFunction } from 'express';
import { nanoid } from 'nanoid';

import { client } from '@prisma/prisma.client';

const href = (hash: string): string => {
  return `http://localhost:3333/r/${hash}`;
};

/**
 * @class ShorteningConttroller
 */
export class ShorteningConttroller {
  private static instance: ShorteningConttroller;

  /**
   * @private constructir
   */

  private constructor() {}

  static get(): ShorteningConttroller {
    const shorteningInstanceNullable = !this.instance;

    if (shorteningInstanceNullable) {
      this.instance = new ShorteningConttroller();
    }

    return this.instance;
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const { original_url } = request.body as { original_url: string };

      const { hash } = await client.shortenings.create({
        data: {
          target_url: null as any,
          original_url,
          hash: nanoid(8),
        },
        select: {
          hash: true,
        },
      });

      // Open modal
      return response.render('index', { href: href(hash) });
    } catch (error) {
      return next(error);
    }
  }

  async renderSharing(request: Request, response: Response) {
    const { hash } = request.params as { hash: string };

    return response.render('sharing', { hash });
  }

  async sharing(request: Request, response: Response, next: NextFunction) {
    try {
      const { hash } = request.params as { hash: string };

      const shortening = await client.shortenings.findUnique({
        where: {
          hash,
        },
        select: {
          original_url: true,
        },
      });

      return response.json({ href: shortening?.original_url ?? null });
    } catch (error) {
      return next(error);
    }
  }
}
