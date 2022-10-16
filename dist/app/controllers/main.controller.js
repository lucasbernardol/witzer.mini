"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainConttroller = void 0;
class MainConttroller {

  constructor() {}
  static get() {
    const mainInstanceNullable = !this.instance;
    if (mainInstanceNullable) {
      this.instance = new MainConttroller();
    }
    return this.instance;
  }
  async root(request, response, next) {
    try {
      return response.render('index', {
        href: null
      });
    } catch (error) {
      return next(error);
    }
  }
}
exports.MainConttroller = MainConttroller;