"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
var queries = {
  getAllUsers: "SELECT NAME1 FROM USUARIOS WHERE EMAIL = @email",
  createNewUser: "INSERT INTO USUARIOS (NAME1, LAST_NAME, EMAIL, PASSWORD, DEPARTMENT) VALUES (@name,@lastName,@email,@pass,@dep)",
  getUserById: "SELECT * FROM USUARIOS WHERE ID = @Id",
  deleteUser: "DELETE FROM USUARIOS WHERE ID=@Id",
  updateUserById: "UPDATE USUARIOS SET NAME1 = @name, LAST_NAME = @lastName, EMAIL = @email, PASSWORD = @pass, DEPARTMENT=@dep WHERE ID = @Id",
  getUserByEmail: "SELECT NAME1 FROM USUARIOS WHERE EMAIL = @email AND PASSWORD = @pass"
};
exports.queries = queries;