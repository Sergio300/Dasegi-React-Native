"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
console.log(process.env.NICKNAME); //para tomar las variables de entorno
var _default = {
  port: process.env.PORT || 4000
};
exports["default"] = _default;