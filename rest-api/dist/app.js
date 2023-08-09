"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config"));
var _users = _interopRequireDefault(require("./routes/users.routes"));
var app = (0, _express["default"])();

// let port; //para que uses una variable

//settings, para configurar el puerto
app.set('port', _config["default"].port); //para que vea que puerto esa como disponible sino que use el 3000 por defecto

//middlewares, para que podamos leer json pasado por post al backend
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); //para leer de un formulario html

app.use(_users["default"]);
var _default = app;
exports["default"] = _default;