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
    public_id, login, password_hash, password_salt;
    index_1.default.query('insert into users values($1, $2, $3, $4) returning public_id', [public_id, login, password_hash, password_salt], function (err, results) {
        if (err)
            throw err;
        res.status(200).json({ message: 'user created' });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RiL3F1ZXJpZXMvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3VzZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsOEJBQThCLG1CQUFPLENBQUMsMENBQVU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDBCQUEwQjtBQUN4RCxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUN0QmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGdDQUFnQyxtQkFBTyxDQUFDLHdCQUFTO0FBQ2pELGFBQWEsbUJBQU8sQ0FBQyxxRUFBOEI7QUFDbkQ7QUFDQTtBQUNBIiwiZmlsZSI6Ii5ob3QvbWFpbi5kNjQ4YzRiYzY1ZGY2YjljNGE2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaW5kZXhfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vaW5kZXhcIikpO1xuZXhwb3J0cy5nZXRVc2VyID0gZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gICAgdmFyIHB1YmxpY19pZCA9IHJlcS5wYXJhbXMucHVibGljX2lkO1xuICAgIGluZGV4XzEuZGVmYXVsdC5xdWVyeSgnc2VsZWN0ICogZnJvbSB1c2VycyB3aGVyZSBwdWJsaWNfaWQgPSAkMScsIFtwdWJsaWNfaWRdLCBmdW5jdGlvbiAoZXJyLCByZXN1bHRzKSB7XG4gICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdHMucm93cyk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5jcmVhdGVVc2VyID0gZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gICAgdmFyIF9hID0gcmVxLmJvZHksIHB1YmxpY19pZCA9IF9hLnB1YmxpY19pZCwgbG9naW4gPSBfYS5sb2dpbiwgcGFzc3dvcmRfaGFzaCA9IF9hLnBhc3N3b3JkX2hhc2gsIHBhc3N3b3JkX3NhbHQgPSBfYS5wYXNzd29yZF9zYWx0O1xuICAgIHB1YmxpY19pZCwgbG9naW4sIHBhc3N3b3JkX2hhc2gsIHBhc3N3b3JkX3NhbHQ7XG4gICAgaW5kZXhfMS5kZWZhdWx0LnF1ZXJ5KCdpbnNlcnQgaW50byB1c2VycyB2YWx1ZXMoJDEsICQyLCAkMywgJDQpIHJldHVybmluZyBwdWJsaWNfaWQnLCBbcHVibGljX2lkLCBsb2dpbiwgcGFzc3dvcmRfaGFzaCwgcGFzc3dvcmRfc2FsdF0sIGZ1bmN0aW9uIChlcnIsIHJlc3VsdHMpIHtcbiAgICAgICAgaWYgKGVycilcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAndXNlciBjcmVhdGVkJyB9KTtcbiAgICB9KTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBleHByZXNzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImV4cHJlc3NcIikpO1xudmFyIHVzZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb25maWcvZGIvcXVlcmllcy91c2VyXCIpO1xudmFyIHVzZXIgPSBleHByZXNzXzEuZGVmYXVsdCgpO1xudXNlci5nZXQoJy86cHVibGljX2lkJywgdXNlcl8xLmdldFVzZXIpO1xuZXhwb3J0cy5kZWZhdWx0ID0gdXNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=