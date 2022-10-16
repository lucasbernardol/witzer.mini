"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShorteningRouter = void 0;
var _express = require("express");
var _shortenings = require("../../controllers/shortenings.controller");
const routes = (0, _express.Router)();
exports.ShorteningRouter = routes;
const controller = _shortenings.ShorteningConttroller.get();
routes.post('/', controller.create);
routes.get('/:hash', controller.sharing);