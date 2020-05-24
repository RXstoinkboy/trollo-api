exports.id = "main";
exports.modules = {

/***/ "./src/routes/categories/index.ts":
/*!****************************************!*\
  !*** ./src/routes/categories/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
var createCategory_1 = __importDefault(__webpack_require__(/*! ./createCategory */ "./src/routes/categories/createCategory.ts"));
var categories = express_1.default();
categories.post('/', createCategory_1.default);
exports.default = categories;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2NhdGVnb3JpZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0NBQWdDLG1CQUFPLENBQUMsd0JBQVM7QUFDakQsdUNBQXVDLG1CQUFPLENBQUMsbUVBQWtCO0FBQ2pFO0FBQ0E7QUFDQSIsImZpbGUiOiIuaG90L21haW4uMzEyNDBjMjIxNzgwNjYxNDhmOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGV4cHJlc3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZXhwcmVzc1wiKSk7XG52YXIgY3JlYXRlQ2F0ZWdvcnlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jcmVhdGVDYXRlZ29yeVwiKSk7XG52YXIgY2F0ZWdvcmllcyA9IGV4cHJlc3NfMS5kZWZhdWx0KCk7XG5jYXRlZ29yaWVzLnBvc3QoJy8nLCBjcmVhdGVDYXRlZ29yeV8xLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gY2F0ZWdvcmllcztcbiJdLCJzb3VyY2VSb290IjoiIn0=