"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConnection = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _promise = _interopRequireDefault(require("mysql2/promise"));
// import sql from 'mssql'

// const dbSettings = {
//     user: 'sa',
//     password: 'CagE-05Hi',
//     server:'localhost',
//     database:'dasegi',
//     port:1433,
//     options:{
//         encrypt:true,
//         trustServerCertificate:true
//     }

// }
//revisamos que sql server tenga activado el protocolo tcp/ip para conectarnos al gestor, eso lo encontramos en documentacion.txt

//como es una respuesta sincrono arreglamos el codigo 

var dbSettings = {
  host: 'localhost',
  user: 'root',
  password: '',
  // port:'443',
  database: 'estacionamiento'
};

// export async function getConnection (){
var getConnection = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _promise["default"].createConnection(dbSettings);
        case 2:
          return _context.abrupt("return", _context.sent);
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getConnection() {
    return _ref.apply(this, arguments);
  };
}();

// getConnection(); //se ejecuto solo para prueba

//exportamos ocmo el modulos
// export { mysql }

// getConnection()
exports.getConnection = getConnection;