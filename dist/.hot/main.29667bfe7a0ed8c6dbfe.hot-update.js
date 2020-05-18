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
exports.default = db;


/***/ }),

/***/ "./src/routes/users/index.ts":
/*!***********************************!*\
  !*** ./src/routes/users/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
var db_1 = __webpack_require__(/*! ../../config/db */ "./src/config/db/index.ts");
var users = express_1.default();
users.get('/', function (req, res) {
    res.status(200).json({ message: 'hello from users' });
});
users.get('/all', db_1.getAllUsers);
exports.default = users;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2RiL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvdXNlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELFdBQVcsbUJBQU8sQ0FBQyxjQUFJO0FBQ3ZCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNKYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0NBQWdDLG1CQUFPLENBQUMsd0JBQVM7QUFDakQsV0FBVyxtQkFBTyxDQUFDLGlEQUFpQjtBQUNwQztBQUNBO0FBQ0EsMEJBQTBCLDhCQUE4QjtBQUN4RCxDQUFDO0FBQ0Q7QUFDQSIsImZpbGUiOiIuaG90L21haW4uMjk2NjdiZmU3YTBlZDhjNmRiZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHBnXzEgPSByZXF1aXJlKFwicGdcIik7XG52YXIgZGIgPSBuZXcgcGdfMS5Qb29sKCk7XG5leHBvcnRzLmRlZmF1bHQgPSBkYjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGV4cHJlc3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZXhwcmVzc1wiKSk7XG52YXIgZGJfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb25maWcvZGJcIik7XG52YXIgdXNlcnMgPSBleHByZXNzXzEuZGVmYXVsdCgpO1xudXNlcnMuZ2V0KCcvJywgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnaGVsbG8gZnJvbSB1c2VycycgfSk7XG59KTtcbnVzZXJzLmdldCgnL2FsbCcsIGRiXzEuZ2V0QWxsVXNlcnMpO1xuZXhwb3J0cy5kZWZhdWx0ID0gdXNlcnM7XG4iXSwic291cmNlUm9vdCI6IiJ9