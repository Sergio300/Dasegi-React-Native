"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserId = exports.getUsers = exports.getUserId = exports.deleteUserId = exports.createNewUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mssql = require("mssql");
var _conection = require("../database/conection");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var getUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var db, _yield$db$query, _yield$db$query2, rows;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _conection.getConnection)();
        case 2:
          db = _context.sent;
          _context.next = 5;
          return db.query("SELECT * FROM usuarios");
        case 5:
          _yield$db$query = _context.sent;
          _yield$db$query2 = (0, _slicedToArray2["default"])(_yield$db$query, 1);
          rows = _yield$db$query2[0];
          // console.log(rows)
          res.json(rows);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getUsers = getUsers;
var getUserId = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var db, _yield$db$query3, _yield$db$query4, rows;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _conection.getConnection)();
        case 2:
          db = _context2.sent;
          _context2.next = 5;
          return db.query("SELECT * FROM usuarios WHERE id =?", [req.params.id]);
        case 5:
          _yield$db$query3 = _context2.sent;
          _yield$db$query4 = (0, _slicedToArray2["default"])(_yield$db$query3, 1);
          rows = _yield$db$query4[0];
          // console.log(rows)
          res.json(rows[0]);
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getUserId(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getUserId = getUserId;
var createNewUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var db, _yield$db$query5, _yield$db$query6, results, newUser;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _conection.getConnection)();
        case 3:
          db = _context3.sent;
          _context3.next = 6;
          return db.query("INSERT INTO USUARIOS (nombre,apellido, correo, contra, departamento) VALUES (?,?,?,?,?)", [req.body.nombre, req.body.apellido, req.body.correo, req.body.contra, req.body.departamento
          // req.body.Id_Lugares
          ]);
        case 6:
          _yield$db$query5 = _context3.sent;
          _yield$db$query6 = (0, _slicedToArray2["default"])(_yield$db$query5, 1);
          results = _yield$db$query6[0];
          newUser = _objectSpread({
            id: results.insertId
          }, req.body);
          res.json(newUser);
          _context3.next = 16;
          break;
        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 13]]);
  }));
  return function createNewUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.createNewUser = createNewUser;
var deleteUserId = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var db;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _conection.getConnection)();
        case 2:
          db = _context4.sent;
          _context4.next = 5;
          return db.query("DELETE FROM usuarios WHERE id =?", [req.params.id]);
        case 5:
          console.log('se elimino');
          res.sendStatus(204);
          // .json(rows[0])
        case 7:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function deleteUserId(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deleteUserId = deleteUserId;
var updateUserId = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var db, results;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _conection.getConnection)();
        case 2:
          db = _context5.sent;
          _context5.next = 5;
          return db.query("UPDATE USUARIOS SET ? WHERE id =?", [req.body, req.params.id]);
        case 5:
          results = _context5.sent;
          console.log(results);
          res.sendStatus(204);
        case 8:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function updateUserId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.updateUserId = updateUserId;