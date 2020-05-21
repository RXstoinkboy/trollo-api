exports.id = "main";
exports.modules = {

/***/ "./src/routes/expenses/index.ts":
/*!**************************************!*\
  !*** ./src/routes/expenses/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
var addExpense_1 = __webpack_require__(/*! ./addExpense */ "./src/routes/expenses/addExpense.ts");
var expenses = express_1.default();
expenses.post('/', addExpense_1.addExpense);
exports.default = expenses;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2V4cGVuc2VzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGdDQUFnQyxtQkFBTyxDQUFDLHdCQUFTO0FBQ2pELG1CQUFtQixtQkFBTyxDQUFDLHlEQUFjO0FBQ3pDO0FBQ0E7QUFDQSIsImZpbGUiOiIuaG90L21haW4uNzI0NzY1NjlkOTc1NTJlZGQ0OTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGV4cHJlc3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZXhwcmVzc1wiKSk7XG52YXIgYWRkRXhwZW5zZV8xID0gcmVxdWlyZShcIi4vYWRkRXhwZW5zZVwiKTtcbnZhciBleHBlbnNlcyA9IGV4cHJlc3NfMS5kZWZhdWx0KCk7XG5leHBlbnNlcy5wb3N0KCcvJywgYWRkRXhwZW5zZV8xLmFkZEV4cGVuc2UpO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwZW5zZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9