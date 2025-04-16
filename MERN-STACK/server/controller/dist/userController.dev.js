"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.update = exports.getUserById = exports.getAllUsers = exports.create = void 0;

var _userModel = _interopRequireDefault(require("../model/userModel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var create = function create(req, res) {
  var newUser, email, userExist, savedData;
  return regeneratorRuntime.async(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          newUser = new _userModel["default"](req.body);
          email = newUser.email;
          _context.next = 5;
          return regeneratorRuntime.awrap(_userModel["default"].findOne({
            email: email
          }));

        case 5:
          userExist = _context.sent;

          if (!userExist) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: "User already exists"
          }));

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(newUser.save());

        case 10:
          savedData = _context.sent;
          // res.status(200).json(savedData)
          res.status(200).json({
            message: "User created successfully"
          });
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            errorMessage: _context.t0.message
          });

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 14]]);
};

exports.create = create;

var getAllUsers = function getAllUsers(req, res) {
  var userData;
  return regeneratorRuntime.async(function getAllUsers$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_userModel["default"].find());

        case 3:
          userData = _context2.sent;

          if (!(!userData || userData.length === 0)) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            message: "User data not found."
          }));

        case 6:
          res.status(200).json(userData);
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            errorMessage: _context2.t0.message
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.getAllUsers = getAllUsers;

var getUserById = function getUserById(req, res) {
  var id, userExist;
  return regeneratorRuntime.async(function getUserById$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_userModel["default"].findById(id));

        case 4:
          userExist = _context3.sent;

          if (userExist) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            message: "User not found"
          }));

        case 7:
          res.status(200).json(userExist);
          _context3.next = 13;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            errorMessage: _context3.t0.message
          });

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.getUserById = getUserById;

var update = function update(req, res) {
  var id, userExist, updatedData;
  return regeneratorRuntime.async(function update$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return regeneratorRuntime.awrap(_userModel["default"].findById(id));

        case 4:
          userExist = _context4.sent;

          if (userExist) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            message: "User not found"
          }));

        case 7:
          _context4.next = 9;
          return regeneratorRuntime.awrap(_userModel["default"].findByIdAndUpdate(id, req.body, {
            "new": true
          }));

        case 9:
          updatedData = _context4.sent;
          // res.status(200).json(updatedData)
          res.status(200).json({
            message: "User updated successfully"
          }, updatedData);
          _context4.next = 16;
          break;

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            errorMessage: _context4.t0.message
          });

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

exports.update = update;

var deleteUser = function deleteUser(req, res) {
  var id, userExist;
  return regeneratorRuntime.async(function deleteUser$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return regeneratorRuntime.awrap(_userModel["default"].findById(id));

        case 4:
          userExist = _context5.sent;

          if (userExist) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", res.status(404).json({
            message: "User not found"
          }));

        case 7:
          _context5.next = 9;
          return regeneratorRuntime.awrap(_userModel["default"].findByIdAndDelete(id));

        case 9:
          res.status(200).json({
            message: "User deleted successfully"
          });
          _context5.next = 15;
          break;

        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            errorMessage: _context5.t0.message
          });

        case 15:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 12]]);
};

exports.deleteUser = deleteUser;