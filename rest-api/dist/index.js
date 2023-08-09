"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
// import './database/conection'//  esto era para probar que pudieramos ver lo de database/conection.js  

_app["default"].listen(_app["default"].get('port')); //para que se habra o conecte por el puerto 3000

console.log('server on port', _app["default"].get('port'));