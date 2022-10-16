"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;
var _express = require("express");
var _main = require("../../controllers/main.controller");
var _shortenings = require("./shortenings.routes");
var _shortenings2 = require("../../controllers/shortenings.controller");
const routes = (0, _express.Router)();
exports.routes = routes;
const controller = _main.MainConttroller.get();
const shortening = _shortenings2.ShorteningConttroller.get();

routes.get('/', controller.root);
routes.get('/r/:hash', shortening.renderSharing);

routes.use('/shortenings', _shortenings.ShorteningRouter);