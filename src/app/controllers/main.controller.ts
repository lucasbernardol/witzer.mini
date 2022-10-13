import type { Request, Response, NextFunction } from 'express';

/**
 * @class MainController
 */
export class MainConttroller {
  private static instance: MainConttroller;

  /**
   * @private constructir
   */

  private constructor() {}

  static get() {
    const mainInstanceNullable = !this.instance;

    if (mainInstanceNullable) {
      this.instance = new MainConttroller();
    }

    return this.instance;
  }

  async root(request: Request, response: Response, next: NextFunction) {
    try {
      return response.render('index');
    } catch (error) {
      return next(error);
    }
  }
}
