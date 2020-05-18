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
    var public_id = req.body.public_id;
    index_1.default.query('select * from users where public_id = $1', [public_id], function (err, results) {
        if (err)
            throw err;
        res.status(200).json(results.rows);
    });
};


/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var routes = __webpack_require__(/*! express */ "express").Router();
var users_1 = __importDefault(__webpack_require__(/*! ./users */ "./src/routes/users/index.ts"));
var user_1 = __importDefault(__webpack_require__(/*! ./user */ "./src/routes/user/index.ts"));
routes.get('/', function (req, res) {
    res.status(200).json({ message: 'Connected!' });
});
routes.use('/users', users_1.default);
routes.use('/user', user_1.default);
exports.default = routes;


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


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RiL3F1ZXJpZXMvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvdXNlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw4QkFBOEIsbUJBQU8sQ0FBQywwQ0FBVTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUNiYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsYUFBYSxtQkFBTyxDQUFDLHdCQUFTO0FBQzlCLDhCQUE4QixtQkFBTyxDQUFDLDRDQUFTO0FBQy9DLDZCQUE2QixtQkFBTyxDQUFDLDBDQUFRO0FBQzdDO0FBQ0EsMEJBQTBCLHdCQUF3QjtBQUNsRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGdDQUFnQyxtQkFBTyxDQUFDLHdCQUFTO0FBQ2pELGFBQWEsbUJBQU8sQ0FBQyxxRUFBOEI7QUFDbkQ7QUFDQSIsImZpbGUiOiIuaG90L21haW4uNDlhNDc0NDI2ZTFlM2Q3MjJjOTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGluZGV4XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2luZGV4XCIpKTtcbmV4cG9ydHMuZ2V0VXNlciA9IGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAgIHZhciBwdWJsaWNfaWQgPSByZXEuYm9keS5wdWJsaWNfaWQ7XG4gICAgaW5kZXhfMS5kZWZhdWx0LnF1ZXJ5KCdzZWxlY3QgKiBmcm9tIHVzZXJzIHdoZXJlIHB1YmxpY19pZCA9ICQxJywgW3B1YmxpY19pZF0sIGZ1bmN0aW9uIChlcnIsIHJlc3VsdHMpIHtcbiAgICAgICAgaWYgKGVycilcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0cy5yb3dzKTtcbiAgICB9KTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByb3V0ZXMgPSByZXF1aXJlKCdleHByZXNzJykuUm91dGVyKCk7XG52YXIgdXNlcnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi91c2Vyc1wiKSk7XG52YXIgdXNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3VzZXJcIikpO1xucm91dGVzLmdldCgnLycsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ0Nvbm5lY3RlZCEnIH0pO1xufSk7XG5yb3V0ZXMudXNlKCcvdXNlcnMnLCB1c2Vyc18xLmRlZmF1bHQpO1xucm91dGVzLnVzZSgnL3VzZXInLCB1c2VyXzEuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSByb3V0ZXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBleHByZXNzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImV4cHJlc3NcIikpO1xudmFyIHVzZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb25maWcvZGIvcXVlcmllcy91c2VyXCIpO1xudmFyIHVzZXIgPSBleHByZXNzXzEuZGVmYXVsdCgpO1xudXNlci5nZXQoJy86cHVibGljX2lkJywgdXNlcl8xLmdldFVzZXIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==