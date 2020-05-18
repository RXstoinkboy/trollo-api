exports.id = "main";
exports.modules = {

/***/ "./src/config/db/index.ts":
/*!********************************!*\
  !*** ./src/config/db/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = __webpack_require__(/*! pg */ "pg");
var db = new pg_1.Pool();
exports.getAllUsers = function (req, res) {
    db.query('select * from users;', function (err, results) {
        if (err)
            throw err;
        res.status(200).json(results);
    });
};
exports.default = db;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RiL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxXQUFXLG1CQUFPLENBQUMsY0FBSTtBQUN2QjtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwiZmlsZSI6Ii5ob3QvbWFpbi40NTZkYTI0NmUwN2MxMTc4Y2M0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcGdfMSA9IHJlcXVpcmUoXCJwZ1wiKTtcbnZhciBkYiA9IG5ldyBwZ18xLlBvb2woKTtcbmV4cG9ydHMuZ2V0QWxsVXNlcnMgPSBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgICBkYi5xdWVyeSgnc2VsZWN0ICogZnJvbSB1c2VyczsnLCBmdW5jdGlvbiAoZXJyLCByZXN1bHRzKSB7XG4gICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdHMpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==