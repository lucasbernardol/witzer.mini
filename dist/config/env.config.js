"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.DOMAIN = void 0;
var _process = require("process");
const {
  DOMAIN,
  PORT
} = _process.env;
exports.PORT = PORT;
exports.DOMAIN = DOMAIN;