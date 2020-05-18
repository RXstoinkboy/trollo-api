exports.id = "main";
exports.modules = {

/***/ "./src/config/db/queries/user.ts":
/*!***************************************!*\
  !*** ./src/config/db/queries/user.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(__webpack_require__(/*! ../index */ "./src/config/db/index.ts"));
exports.getUser = function (req, res) {
    var public_id = req.params.public_id;
    index_1.default.query('select * from users where public_id = $1', [public_id], function (err, results) {
        if (err)
            throw err;
        res.status(200).json(results.rows);
    });
};
exports.createUser = function (req, res) {
    var _a = req.body, public_id = _a.public_id, login = _a.login, password_hash = _a.password_hash, password_salt = _a.password_salt;
    index_1.default.query('insert into users values($1, $2, $3, $4) returning public_id', [public_id, login, password_hash, password_salt], function (err, results) {
        if (err)
            throw err;
        res.status(200).json({ message: 'user created', results: results });
    });
};


/***/ }),

/***/ "./src/routes/user/index.ts":
/*!**********************************!*\
  !*** ./src/routes/user/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
var user_1 = __webpack_require__(/*! ../../config/db/queries/user */ "./src/config/db/queries/user.ts");
var user = express_1.default();
user.get('/:public_id', user_1.getUser);
exports.default = user;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RiL3F1ZXJpZXMvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3VzZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsOEJBQThCLG1CQUFPLENBQUMsMENBQVU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw0Q0FBNEM7QUFDMUUsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDckJhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQ0FBZ0MsbUJBQU8sQ0FBQyx3QkFBUztBQUNqRCxhQUFhLG1CQUFPLENBQUMscUVBQThCO0FBQ25EO0FBQ0E7QUFDQSIsImZpbGUiOiIuaG90L21haW4uNTk2MmMwYzEzZjllMjQ4ODlhZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGluZGV4XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2luZGV4XCIpKTtcbmV4cG9ydHMuZ2V0VXNlciA9IGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAgIHZhciBwdWJsaWNfaWQgPSByZXEucGFyYW1zLnB1YmxpY19pZDtcbiAgICBpbmRleF8xLmRlZmF1bHQucXVlcnkoJ3NlbGVjdCAqIGZyb20gdXNlcnMgd2hlcmUgcHVibGljX2lkID0gJDEnLCBbcHVibGljX2lkXSwgZnVuY3Rpb24gKGVyciwgcmVzdWx0cykge1xuICAgICAgICBpZiAoZXJyKVxuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHRzLnJvd3MpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuY3JlYXRlVXNlciA9IGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAgIHZhciBfYSA9IHJlcS5ib2R5LCBwdWJsaWNfaWQgPSBfYS5wdWJsaWNfaWQsIGxvZ2luID0gX2EubG9naW4sIHBhc3N3b3JkX2hhc2ggPSBfYS5wYXNzd29yZF9oYXNoLCBwYXNzd29yZF9zYWx0ID0gX2EucGFzc3dvcmRfc2FsdDtcbiAgICBpbmRleF8xLmRlZmF1bHQucXVlcnkoJ2luc2VydCBpbnRvIHVzZXJzIHZhbHVlcygkMSwgJDIsICQzLCAkNCkgcmV0dXJuaW5nIHB1YmxpY19pZCcsIFtwdWJsaWNfaWQsIGxvZ2luLCBwYXNzd29yZF9oYXNoLCBwYXNzd29yZF9zYWx0XSwgZnVuY3Rpb24gKGVyciwgcmVzdWx0cykge1xuICAgICAgICBpZiAoZXJyKVxuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICd1c2VyIGNyZWF0ZWQnLCByZXN1bHRzOiByZXN1bHRzIH0pO1xuICAgIH0pO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGV4cHJlc3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZXhwcmVzc1wiKSk7XG52YXIgdXNlcl8xID0gcmVxdWlyZShcIi4uLy4uL2NvbmZpZy9kYi9xdWVyaWVzL3VzZXJcIik7XG52YXIgdXNlciA9IGV4cHJlc3NfMS5kZWZhdWx0KCk7XG51c2VyLmdldCgnLzpwdWJsaWNfaWQnLCB1c2VyXzEuZ2V0VXNlcik7XG5leHBvcnRzLmRlZmF1bHQgPSB1c2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==