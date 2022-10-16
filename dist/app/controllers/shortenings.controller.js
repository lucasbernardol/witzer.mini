"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShorteningConttroller = void 0;
var _nanoid = require("nanoid");
var _env = require("../../config/env.config");
var _prisma = require("../../config/prisma.config");
const href = hash => {
  return `${_env.DOMAIN}/r/${hash}`;
};

class ShorteningConttroller {
  constructor() {}
  static get() {
    const shorteningInstanceNullable = !this.instance;
    if (shorteningInstanceNullable) {
      this.instance = new ShorteningConttroller();
    }
    return this.instance;
  }
  async create(request, response, next) {
    try {
      const {
        original_url
      } = request.body;
      const {
        hash
      } = await _prisma.client.shortenings.create({
        data: {
          target_url: null,
          original_url,
          hash: (0, _nanoid.nanoid)(8)
        },
        select: {
          hash: true
        }
      });

      return response.render('index', {
        href: href(hash)
      });
    } catch (error) {
      return next(error);
    }
  }
  async renderSharing(request, response) {
    const {
      hash
    } = request.params;
    return response.render('loading', {
      hash
    });
  }
  async sharing(request, response, next) {
    try {
      const {
        hash
      } = request.params;
      const shortening = await _prisma.client.shortenings.findUnique({
        where: {
          hash
        },
        select: {
          original_url: true
        }
      });
      return response.json({
        href: shortening?.original_url ?? null
      });
    } catch (error) {
      return next(error);
    }
  }
}
exports.ShorteningConttroller = ShorteningConttroller;