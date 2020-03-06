exports.id = "main";
exports.modules = {

/***/ "./src/schemas/type-defs.ts":
/*!**********************************!*\
  !*** ./src/schemas/type-defs.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var gql = __webpack_require__(/*! apollo-server */ "apollo-server").gql;
var typeDefs = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\ttype Expense {\n\t\tid: ID!\n\t\ttitle: String\n\t\tdescription: String\n\t\tvalue: Number\n\t\tauthor: String!\n\t\ttype(type: ExpenseTypes): String!\n\t\tlabel: String\n\t\tcreatedAt: String!\n\t\tupdateAt: String!\n\t}\n"], ["\n\ttype Expense {\n\t\tid: ID!\n\t\ttitle: String\n\t\tdescription: String\n\t\tvalue: Number\n\t\tauthor: String!\n\t\ttype(type: ExpenseTypes): String!\n\t\tlabel: String\n\t\tcreatedAt: String!\n\t\tupdateAt: String!\n\t}\n"])));
exports.default = typeDefs;
var templateObject_1;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy90eXBlLWRlZnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsZ0NBQWdDLHVDQUF1QyxhQUFhLEVBQUUsRUFBRSxPQUFPLGtCQUFrQjtBQUNqSDtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsVUFBVSxtQkFBTyxDQUFDLG9DQUFlO0FBQ2pDLG9HQUFvRywrTUFBK00sMEJBQTBCLCtNQUErTTtBQUM1aEI7QUFDQSIsImZpbGUiOiJtYWluLjUzMzY0ZTI2NDJjMzMzMGE3NzkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX21ha2VUZW1wbGF0ZU9iamVjdCA9ICh0aGlzICYmIHRoaXMuX19tYWtlVGVtcGxhdGVPYmplY3QpIHx8IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gICAgcmV0dXJuIGNvb2tlZDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZ3FsID0gcmVxdWlyZSgnYXBvbGxvLXNlcnZlcicpLmdxbDtcbnZhciB0eXBlRGVmcyA9IGdxbCh0ZW1wbGF0ZU9iamVjdF8xIHx8ICh0ZW1wbGF0ZU9iamVjdF8xID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuXFx0dHlwZSBFeHBlbnNlIHtcXG5cXHRcXHRpZDogSUQhXFxuXFx0XFx0dGl0bGU6IFN0cmluZ1xcblxcdFxcdGRlc2NyaXB0aW9uOiBTdHJpbmdcXG5cXHRcXHR2YWx1ZTogTnVtYmVyXFxuXFx0XFx0YXV0aG9yOiBTdHJpbmchXFxuXFx0XFx0dHlwZSh0eXBlOiBFeHBlbnNlVHlwZXMpOiBTdHJpbmchXFxuXFx0XFx0bGFiZWw6IFN0cmluZ1xcblxcdFxcdGNyZWF0ZWRBdDogU3RyaW5nIVxcblxcdFxcdHVwZGF0ZUF0OiBTdHJpbmchXFxuXFx0fVxcblwiXSwgW1wiXFxuXFx0dHlwZSBFeHBlbnNlIHtcXG5cXHRcXHRpZDogSUQhXFxuXFx0XFx0dGl0bGU6IFN0cmluZ1xcblxcdFxcdGRlc2NyaXB0aW9uOiBTdHJpbmdcXG5cXHRcXHR2YWx1ZTogTnVtYmVyXFxuXFx0XFx0YXV0aG9yOiBTdHJpbmchXFxuXFx0XFx0dHlwZSh0eXBlOiBFeHBlbnNlVHlwZXMpOiBTdHJpbmchXFxuXFx0XFx0bGFiZWw6IFN0cmluZ1xcblxcdFxcdGNyZWF0ZWRBdDogU3RyaW5nIVxcblxcdFxcdHVwZGF0ZUF0OiBTdHJpbmchXFxuXFx0fVxcblwiXSkpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVEZWZzO1xudmFyIHRlbXBsYXRlT2JqZWN0XzE7XG4iXSwic291cmNlUm9vdCI6IiJ9