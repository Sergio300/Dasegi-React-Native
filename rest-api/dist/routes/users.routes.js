"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _users = require("../controllers/users.controller");
//nos permite crear url

var router = (0, _express.Router)();

//ruta para usuarios
router.get('/users', _users.getUsers); //obtener usuarios
router.get('/users/:id', _users.getUserId); //obtener usuarios
router.post('/users', _users.createNewUser);
router["delete"]('/users/:id', _users.deleteUserId);
router.put('/users/:id', _users.updateUserId);
var _default = router;
exports["default"] = _default;