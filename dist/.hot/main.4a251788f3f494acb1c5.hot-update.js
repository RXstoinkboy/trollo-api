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
var updateExpense_1 = __webpack_require__(/*! ./updateExpense */ "./src/routes/expenses/updateExpense.ts");
var expenses = express_1.default();
expenses.post('/', addExpense_1.addExpense);
expenses.put('/', updateExpense_1.updateExpense);
exports.default = expenses;


/***/ }),

/***/ "./src/routes/expenses/updateExpense.ts":
/*!**********************************************!*\
  !*** ./src/routes/expenses/updateExpense.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (84:36)\nFile was processed with these loaders:\n * ./node_modules/ts-loader/index.js\nYou may need an additional loader to handle the result of these loaders.\n|                 case 8:\n|                     err_1 = _b.sent();\n>                     res.status(400)..json({ message: 'Sorry, something went wrong when updating expense' });\n|                     console.error(err_1);\n|                     return [3, 10];");

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2V4cGVuc2VzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGdDQUFnQyxtQkFBTyxDQUFDLHdCQUFTO0FBQ2pELG1CQUFtQixtQkFBTyxDQUFDLHlEQUFjO0FBQ3pDLHNCQUFzQixtQkFBTyxDQUFDLCtEQUFpQjtBQUMvQztBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuaG90L21haW4uNGEyNTE3ODhmM2Y0OTRhY2IxYzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGV4cHJlc3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZXhwcmVzc1wiKSk7XG52YXIgYWRkRXhwZW5zZV8xID0gcmVxdWlyZShcIi4vYWRkRXhwZW5zZVwiKTtcbnZhciB1cGRhdGVFeHBlbnNlXzEgPSByZXF1aXJlKFwiLi91cGRhdGVFeHBlbnNlXCIpO1xudmFyIGV4cGVuc2VzID0gZXhwcmVzc18xLmRlZmF1bHQoKTtcbmV4cGVuc2VzLnBvc3QoJy8nLCBhZGRFeHBlbnNlXzEuYWRkRXhwZW5zZSk7XG5leHBlbnNlcy5wdXQoJy8nLCB1cGRhdGVFeHBlbnNlXzEudXBkYXRlRXhwZW5zZSk7XG5leHBvcnRzLmRlZmF1bHQgPSBleHBlbnNlcztcbiJdLCJzb3VyY2VSb290IjoiIn0=