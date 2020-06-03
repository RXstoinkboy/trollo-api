exports.id = "main";
exports.modules = {

/***/ "./src/routes/categories/controllers/Update-category.ts":
/*!**************************************************************!*\
  !*** ./src/routes/categories/controllers/Update-category.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = __importDefault(__webpack_require__(/*! ../../../config/db */ "./src/config/db/index.ts"));
var update_query_1 = __importDefault(__webpack_require__(/*! ../models/update-query */ "./src/routes/categories/models/update-query.ts"));
function updateCategory(_a) {
    var category_id = _a.category_id, user_id = _a.user_id, name = _a.name, description = _a.description, color = _a.color;
    return __awaiter(this, void 0, void 0, function () {
        var client, usersCategoriesParams, categoriesDetailsParams, usersCategoriesDetailsResult, insertDetailsParams, categoriesParams, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, db_1.default.connect()];
                case 1:
                    client = _b.sent();
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 12, 14, 15]);
                    return [4, client.query('BEGIN;')];
                case 3:
                    _b.sent();
                    if (!user_id) return [3, 5];
                    usersCategoriesParams = [category_id, user_id];
                    return [4, client.query(update_query_1.default.usersCategories, usersCategoriesParams)];
                case 4:
                    _b.sent();
                    _b.label = 5;
                case 5:
                    if (!(description || color)) return [3, 10];
                    categoriesDetailsParams = [category_id, description, color];
                    return [4, client.query(update_query_1.default.categoriesDetails, categoriesDetailsParams)];
                case 6:
                    usersCategoriesDetailsResult = _b.sent();
                    if (!!usersCategoriesDetailsResult.rows[0]) return [3, 8];
                    insertDetailsParams = [category_id, description, color];
                    return [4, client.query(update_query_1.default.insertDetails, insertDetailsParams)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    if (!name) return [3, 10];
                    categoriesParams = [
                        category_id,
                        name,
                    ];
                    return [4, client.query(update_query_1.default.categories, categoriesParams)];
                case 9:
                    _b.sent();
                    _b.label = 10;
                case 10: return [4, client.qeury('COMMIT;')];
                case 11:
                    _b.sent();
                    return [3, 15];
                case 12:
                    err_1 = _b.sent();
                    return [4, client.query('ROLLBACK;')];
                case 13:
                    _b.sent();
                    console.error(err_1);
                    throw err_1;
                case 14:
                    client.release();
                    return [7];
                case 15: return [2];
            }
        });
    });
}
exports.default = updateCategory;


/***/ }),

/***/ "./src/routes/categories/models/update-query.ts":
/*!******************************************************!*\
  !*** ./src/routes/categories/models/update-query.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var query = {
    categories: "\n    update categories set\n        name = coalesce($2, name)\n    where public_id = $1;\n",
    categoriesDetails: "\n    update categories_details set\n        description = coalesce($2, description),\n        color = coalesce($3, color)\n    where category_id = $1;\n",
    insertDetails: "\n    insert into categories_details\n        (category_id, description, color)\n    values ($1, $2, $3);\n",
    usersCategories: "\n    update users_categories set\n        user_id = coalesce($2, user_id)\n    where category_id = $1;\n",
};
exports.default = query;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2NhdGVnb3JpZXMvY29udHJvbGxlcnMvVXBkYXRlLWNhdGVnb3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvY2F0ZWdvcmllcy9tb2RlbHMvdXBkYXRlLXF1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCwyQkFBMkIsbUJBQU8sQ0FBQyxvREFBb0I7QUFDdkQscUNBQXFDLG1CQUFPLENBQUMsOEVBQXdCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6R2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLDBHQUEwRztBQUMxRywrS0FBK0s7QUFDL0ssNkhBQTZIO0FBQzdILDZIQUE2SDtBQUM3SDtBQUNBIiwiZmlsZSI6Ii5ob3QvbWFpbi45MTBjYmVmODdlZjE4OWYyNGIxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRiXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL2NvbmZpZy9kYlwiKSk7XG52YXIgdXBkYXRlX3F1ZXJ5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21vZGVscy91cGRhdGUtcXVlcnlcIikpO1xuZnVuY3Rpb24gdXBkYXRlQ2F0ZWdvcnkoX2EpIHtcbiAgICB2YXIgY2F0ZWdvcnlfaWQgPSBfYS5jYXRlZ29yeV9pZCwgdXNlcl9pZCA9IF9hLnVzZXJfaWQsIG5hbWUgPSBfYS5uYW1lLCBkZXNjcmlwdGlvbiA9IF9hLmRlc2NyaXB0aW9uLCBjb2xvciA9IF9hLmNvbG9yO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNsaWVudCwgdXNlcnNDYXRlZ29yaWVzUGFyYW1zLCBjYXRlZ29yaWVzRGV0YWlsc1BhcmFtcywgdXNlcnNDYXRlZ29yaWVzRGV0YWlsc1Jlc3VsdCwgaW5zZXJ0RGV0YWlsc1BhcmFtcywgY2F0ZWdvcmllc1BhcmFtcywgZXJyXzE7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCwgZGJfMS5kZWZhdWx0LmNvbm5lY3QoKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBjbGllbnQgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMiwgMTIsIDE0LCAxNV0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGNsaWVudC5xdWVyeSgnQkVHSU47JyldO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXVzZXJfaWQpIHJldHVybiBbMywgNV07XG4gICAgICAgICAgICAgICAgICAgIHVzZXJzQ2F0ZWdvcmllc1BhcmFtcyA9IFtjYXRlZ29yeV9pZCwgdXNlcl9pZF07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgY2xpZW50LnF1ZXJ5KHVwZGF0ZV9xdWVyeV8xLmRlZmF1bHQudXNlcnNDYXRlZ29yaWVzLCB1c2Vyc0NhdGVnb3JpZXNQYXJhbXMpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA1O1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZGVzY3JpcHRpb24gfHwgY29sb3IpKSByZXR1cm4gWzMsIDEwXTtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllc0RldGFpbHNQYXJhbXMgPSBbY2F0ZWdvcnlfaWQsIGRlc2NyaXB0aW9uLCBjb2xvcl07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgY2xpZW50LnF1ZXJ5KHVwZGF0ZV9xdWVyeV8xLmRlZmF1bHQuY2F0ZWdvcmllc0RldGFpbHMsIGNhdGVnb3JpZXNEZXRhaWxzUGFyYW1zKV07XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICB1c2Vyc0NhdGVnb3JpZXNEZXRhaWxzUmVzdWx0ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoISF1c2Vyc0NhdGVnb3JpZXNEZXRhaWxzUmVzdWx0LnJvd3NbMF0pIHJldHVybiBbMywgOF07XG4gICAgICAgICAgICAgICAgICAgIGluc2VydERldGFpbHNQYXJhbXMgPSBbY2F0ZWdvcnlfaWQsIGRlc2NyaXB0aW9uLCBjb2xvcl07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgY2xpZW50LnF1ZXJ5KHVwZGF0ZV9xdWVyeV8xLmRlZmF1bHQuaW5zZXJ0RGV0YWlscywgaW5zZXJ0RGV0YWlsc1BhcmFtcyldO1xuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDg7XG4gICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5hbWUpIHJldHVybiBbMywgMTBdO1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzUGFyYW1zID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGNsaWVudC5xdWVyeSh1cGRhdGVfcXVlcnlfMS5kZWZhdWx0LmNhdGVnb3JpZXMsIGNhdGVnb3JpZXNQYXJhbXMpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxMDtcbiAgICAgICAgICAgICAgICBjYXNlIDEwOiByZXR1cm4gWzQsIGNsaWVudC5xZXVyeSgnQ09NTUlUOycpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMTVdO1xuICAgICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgICAgIGVycl8xID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGNsaWVudC5xdWVyeSgnUk9MTEJBQ0s7JyldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJfMSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycl8xO1xuICAgICAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudC5yZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbN107XG4gICAgICAgICAgICAgICAgY2FzZSAxNTogcmV0dXJuIFsyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB1cGRhdGVDYXRlZ29yeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHF1ZXJ5ID0ge1xuICAgIGNhdGVnb3JpZXM6IFwiXFxuICAgIHVwZGF0ZSBjYXRlZ29yaWVzIHNldFxcbiAgICAgICAgbmFtZSA9IGNvYWxlc2NlKCQyLCBuYW1lKVxcbiAgICB3aGVyZSBwdWJsaWNfaWQgPSAkMTtcXG5cIixcbiAgICBjYXRlZ29yaWVzRGV0YWlsczogXCJcXG4gICAgdXBkYXRlIGNhdGVnb3JpZXNfZGV0YWlscyBzZXRcXG4gICAgICAgIGRlc2NyaXB0aW9uID0gY29hbGVzY2UoJDIsIGRlc2NyaXB0aW9uKSxcXG4gICAgICAgIGNvbG9yID0gY29hbGVzY2UoJDMsIGNvbG9yKVxcbiAgICB3aGVyZSBjYXRlZ29yeV9pZCA9ICQxO1xcblwiLFxuICAgIGluc2VydERldGFpbHM6IFwiXFxuICAgIGluc2VydCBpbnRvIGNhdGVnb3JpZXNfZGV0YWlsc1xcbiAgICAgICAgKGNhdGVnb3J5X2lkLCBkZXNjcmlwdGlvbiwgY29sb3IpXFxuICAgIHZhbHVlcyAoJDEsICQyLCAkMyk7XFxuXCIsXG4gICAgdXNlcnNDYXRlZ29yaWVzOiBcIlxcbiAgICB1cGRhdGUgdXNlcnNfY2F0ZWdvcmllcyBzZXRcXG4gICAgICAgIHVzZXJfaWQgPSBjb2FsZXNjZSgkMiwgdXNlcl9pZClcXG4gICAgd2hlcmUgY2F0ZWdvcnlfaWQgPSAkMTtcXG5cIixcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBxdWVyeTtcbiJdLCJzb3VyY2VSb290IjoiIn0=