"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;
var _nodePath = require("node:path");
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _helmet = _interopRequireDefault(require("helmet"));
var _morgan = _interopRequireDefault(require("morgan"));
var _index = require("./routes/v1/index.routes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
exports.app = app;
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use((0, _helmet.default)());
app.use((0, _cors.default)());

app.use(_express.default.static((0, _nodePath.resolve)(__dirname, '..', '..', 'public', 'static')));
app.set('view engine', 'ejs');
app.set('views', (0, _nodePath.resolve)(__dirname, '..', '..', 'public', 'views'));
app.use((0, _morgan.default)('dev'));
app.use((request, response, next) => {
  console.log('__PROTOOL__', request.protocol, request.get('host'), request.headers['host']);
  
  return next();
})
app.use(_index.routes);
app.use((request, response, next) => {
  return response.status(404).render('not-found');
});
