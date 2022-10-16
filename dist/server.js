"use strict";

require("dotenv/config");
var _env = require("./config/env.config");
var _app = require("./app/app");
const _PORT = Number.parseInt(_env.PORT, 10) || 3333;
_app.app.listen(_PORT, () => {
  console.log(`\nHOST: ${_env.DOMAIN}\nPORT: ${_PORT}`);
});