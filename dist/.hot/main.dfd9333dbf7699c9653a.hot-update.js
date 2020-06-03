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
var deleteCategory_1 = __importDefault(__webpack_require__(/*! ./deleteCategory */ "./src/routes/categories/deleteCategory.ts"));
var updateCategory_1 = __importDefault(__webpack_require__(/*! ./updateCategory */ "./src/routes/categories/updateCategory.ts"));
var categories = express_1.default();
categories.post('/', createCategory_1.default);
categories.delete('/', deleteCategory_1.default);
categories.put('/', updateCategory_1.default);
exports.default = categories;


/***/ }),

/***/ "./src/routes/categories/updateCategory.ts":
/*!*************************************************!*\
  !*** ./src/routes/categories/updateCategory.ts ***!
  \*************************************************/
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
var db_1 = __importDefault(__webpack_require__(/*! ../../config/db */ "./src/config/db/index.ts"));
function updateCategory(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, category_id, user_id, name, description, color, client, resObject, usersCategoriesParams, usersCategoriesResult, o_user_id, categoriesDetailsParams, usersCategoriesDetailsResult, _b, o_description, o_color, insertDetailsParams, insertDetailsResults, _c, o_description, o_color, categoriesParams, categoriesQueryResult, o_name, err_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = req.body, category_id = _a.category_id, user_id = _a.user_id, name = _a.name, description = _a.description, color = _a.color;
                    return [4, db_1.default.connect()];
                case 1:
                    client = _d.sent();
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 12, 14, 15]);
                    resObject = {
                        category_id: category_id,
                    };
                    return [4, client.query('BEGIN;')];
                case 3:
                    _d.sent();
                    if (!user_id) return [3, 5];
                    usersCategoriesParams = [category_id, user_id];
                    return [4, client.query(usersCategoriesQuery, usersCategoriesParams)];
                case 4:
                    usersCategoriesResult = _d.sent();
                    o_user_id = usersCategoriesResult.rows[0].user_id;
                    resObject.user_id = o_user_id;
                    _d.label = 5;
                case 5:
                    if (!(description || color)) return [3, 8];
                    categoriesDetailsParams = [category_id, description, color];
                    return [4, client.query(categoriesDetailsQuery, categoriesDetailsParams)];
                case 6:
                    usersCategoriesDetailsResult = _d.sent();
                    if (usersCategoriesDetailsResult.rows[0]) {
                        _b = usersCategoriesDetailsResult.rows[0], o_description = _b.description, o_color = _b.color;
                        resObject.description = o_description;
                        resObject.color = o_color;
                    }
                    if (!!usersCategoriesDetailsResult.rows[0]) return [3, 8];
                    insertDetailsParams = [category_id, description, color];
                    return [4, client.query(insertDetailsQuery, insertDetailsParams)];
                case 7:
                    insertDetailsResults = _d.sent();
                    _c = insertDetailsResults.rows[0], o_description = _c.description, o_color = _c.color;
                    resObject.description = o_description;
                    resObject.color = o_color;
                    _d.label = 8;
                case 8:
                    if (!name) return [3, 10];
                    categoriesParams = [category_id, name];
                    return [4, client.query(categoriesQuery, categoriesParams)];
                case 9:
                    categoriesQueryResult = _d.sent();
                    o_name = categoriesQueryResult.rows[0].name;
                    resObject.name = o_name;
                    _d.label = 10;
                case 10: return [4, client.query('COMMIT;')];
                case 11:
                    _d.sent();
                    res.status(200).json({
                        message: 'Update was successful',
                        resObject: resObject,
                    });
                    return [3, 15];
                case 12:
                    err_1 = _d.sent();
                    return [4, client.query('ROLLBACK;')];
                case 13:
                    _d.sent();
                    console.error(err_1);
                    res.status(500).send('Sorry, we had inteneal error');
                    return [3, 15];
                case 14:
                    client.release();
                    return [7];
                case 15: return [2];
            }
        });
    });
}
exports.default = updateCategory;
function updateCategory(_a) {
    var category_id = _a.category_id, user_id = _a.user_id, name = _a.name, description = _a.description, color = _a.color;
    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
        return [2];
    }); });
}
exports.default = updateCategory;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2NhdGVnb3JpZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9jYXRlZ29yaWVzL3VwZGF0ZUNhdGVnb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGdDQUFnQyxtQkFBTyxDQUFDLHdCQUFTO0FBQ2pELHVDQUF1QyxtQkFBTyxDQUFDLG1FQUFrQjtBQUNqRSx1Q0FBdUMsbUJBQU8sQ0FBQyxtRUFBa0I7QUFDakUsdUNBQXVDLG1CQUFPLENBQUMsbUVBQWtCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiYTtBQUNiO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDJCQUEyQixtQkFBTyxDQUFDLGlEQUFpQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0EsS0FBSyxFQUFFLEVBQUU7QUFDVDtBQUNBIiwiZmlsZSI6Ii5ob3QvbWFpbi5kZmQ5MzMzZGJmNzY5OWM5NjUzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZXhwcmVzc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJleHByZXNzXCIpKTtcbnZhciBjcmVhdGVDYXRlZ29yeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NyZWF0ZUNhdGVnb3J5XCIpKTtcbnZhciBkZWxldGVDYXRlZ29yeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2RlbGV0ZUNhdGVnb3J5XCIpKTtcbnZhciB1cGRhdGVDYXRlZ29yeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3VwZGF0ZUNhdGVnb3J5XCIpKTtcbnZhciBjYXRlZ29yaWVzID0gZXhwcmVzc18xLmRlZmF1bHQoKTtcbmNhdGVnb3JpZXMucG9zdCgnLycsIGNyZWF0ZUNhdGVnb3J5XzEuZGVmYXVsdCk7XG5jYXRlZ29yaWVzLmRlbGV0ZSgnLycsIGRlbGV0ZUNhdGVnb3J5XzEuZGVmYXVsdCk7XG5jYXRlZ29yaWVzLnB1dCgnLycsIHVwZGF0ZUNhdGVnb3J5XzEuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSBjYXRlZ29yaWVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRiXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2NvbmZpZy9kYlwiKSk7XG5mdW5jdGlvbiB1cGRhdGVDYXRlZ29yeShyZXEsIHJlcykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hLCBjYXRlZ29yeV9pZCwgdXNlcl9pZCwgbmFtZSwgZGVzY3JpcHRpb24sIGNvbG9yLCBjbGllbnQsIHJlc09iamVjdCwgdXNlcnNDYXRlZ29yaWVzUGFyYW1zLCB1c2Vyc0NhdGVnb3JpZXNSZXN1bHQsIG9fdXNlcl9pZCwgY2F0ZWdvcmllc0RldGFpbHNQYXJhbXMsIHVzZXJzQ2F0ZWdvcmllc0RldGFpbHNSZXN1bHQsIF9iLCBvX2Rlc2NyaXB0aW9uLCBvX2NvbG9yLCBpbnNlcnREZXRhaWxzUGFyYW1zLCBpbnNlcnREZXRhaWxzUmVzdWx0cywgX2MsIG9fZGVzY3JpcHRpb24sIG9fY29sb3IsIGNhdGVnb3JpZXNQYXJhbXMsIGNhdGVnb3JpZXNRdWVyeVJlc3VsdCwgb19uYW1lLCBlcnJfMTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZCkge1xuICAgICAgICAgICAgc3dpdGNoIChfZC5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgX2EgPSByZXEuYm9keSwgY2F0ZWdvcnlfaWQgPSBfYS5jYXRlZ29yeV9pZCwgdXNlcl9pZCA9IF9hLnVzZXJfaWQsIG5hbWUgPSBfYS5uYW1lLCBkZXNjcmlwdGlvbiA9IF9hLmRlc2NyaXB0aW9uLCBjb2xvciA9IF9hLmNvbG9yO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGRiXzEuZGVmYXVsdC5jb25uZWN0KCldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50ID0gX2Quc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBfZC5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBfZC50cnlzLnB1c2goWzIsIDEyLCAxNCwgMTVdKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzT2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6IGNhdGVnb3J5X2lkLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGNsaWVudC5xdWVyeSgnQkVHSU47JyldO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgX2Quc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXVzZXJfaWQpIHJldHVybiBbMywgNV07XG4gICAgICAgICAgICAgICAgICAgIHVzZXJzQ2F0ZWdvcmllc1BhcmFtcyA9IFtjYXRlZ29yeV9pZCwgdXNlcl9pZF07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgY2xpZW50LnF1ZXJ5KHVzZXJzQ2F0ZWdvcmllc1F1ZXJ5LCB1c2Vyc0NhdGVnb3JpZXNQYXJhbXMpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIHVzZXJzQ2F0ZWdvcmllc1Jlc3VsdCA9IF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgb191c2VyX2lkID0gdXNlcnNDYXRlZ29yaWVzUmVzdWx0LnJvd3NbMF0udXNlcl9pZDtcbiAgICAgICAgICAgICAgICAgICAgcmVzT2JqZWN0LnVzZXJfaWQgPSBvX3VzZXJfaWQ7XG4gICAgICAgICAgICAgICAgICAgIF9kLmxhYmVsID0gNTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKGRlc2NyaXB0aW9uIHx8IGNvbG9yKSkgcmV0dXJuIFszLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllc0RldGFpbHNQYXJhbXMgPSBbY2F0ZWdvcnlfaWQsIGRlc2NyaXB0aW9uLCBjb2xvcl07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgY2xpZW50LnF1ZXJ5KGNhdGVnb3JpZXNEZXRhaWxzUXVlcnksIGNhdGVnb3JpZXNEZXRhaWxzUGFyYW1zKV07XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICB1c2Vyc0NhdGVnb3JpZXNEZXRhaWxzUmVzdWx0ID0gX2Quc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodXNlcnNDYXRlZ29yaWVzRGV0YWlsc1Jlc3VsdC5yb3dzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IHVzZXJzQ2F0ZWdvcmllc0RldGFpbHNSZXN1bHQucm93c1swXSwgb19kZXNjcmlwdGlvbiA9IF9iLmRlc2NyaXB0aW9uLCBvX2NvbG9yID0gX2IuY29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNPYmplY3QuZGVzY3JpcHRpb24gPSBvX2Rlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzT2JqZWN0LmNvbG9yID0gb19jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoISF1c2Vyc0NhdGVnb3JpZXNEZXRhaWxzUmVzdWx0LnJvd3NbMF0pIHJldHVybiBbMywgOF07XG4gICAgICAgICAgICAgICAgICAgIGluc2VydERldGFpbHNQYXJhbXMgPSBbY2F0ZWdvcnlfaWQsIGRlc2NyaXB0aW9uLCBjb2xvcl07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgY2xpZW50LnF1ZXJ5KGluc2VydERldGFpbHNRdWVyeSwgaW5zZXJ0RGV0YWlsc1BhcmFtcyldO1xuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0RGV0YWlsc1Jlc3VsdHMgPSBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIF9jID0gaW5zZXJ0RGV0YWlsc1Jlc3VsdHMucm93c1swXSwgb19kZXNjcmlwdGlvbiA9IF9jLmRlc2NyaXB0aW9uLCBvX2NvbG9yID0gX2MuY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIHJlc09iamVjdC5kZXNjcmlwdGlvbiA9IG9fZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgIHJlc09iamVjdC5jb2xvciA9IG9fY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIF9kLmxhYmVsID0gODtcbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgIGlmICghbmFtZSkgcmV0dXJuIFszLCAxMF07XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXNQYXJhbXMgPSBbY2F0ZWdvcnlfaWQsIG5hbWVdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGNsaWVudC5xdWVyeShjYXRlZ29yaWVzUXVlcnksIGNhdGVnb3JpZXNQYXJhbXMpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXNRdWVyeVJlc3VsdCA9IF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgb19uYW1lID0gY2F0ZWdvcmllc1F1ZXJ5UmVzdWx0LnJvd3NbMF0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzT2JqZWN0Lm5hbWUgPSBvX25hbWU7XG4gICAgICAgICAgICAgICAgICAgIF9kLmxhYmVsID0gMTA7XG4gICAgICAgICAgICAgICAgY2FzZSAxMDogcmV0dXJuIFs0LCBjbGllbnQucXVlcnkoJ0NPTU1JVDsnKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgX2Quc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVXBkYXRlIHdhcyBzdWNjZXNzZnVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc09iamVjdDogcmVzT2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAxNV07XG4gICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgZXJyXzEgPSBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgY2xpZW50LnF1ZXJ5KCdST0xMQkFDSzsnKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgX2Quc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycl8xKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoJ1NvcnJ5LCB3ZSBoYWQgaW50ZW5lYWwgZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAxNV07XG4gICAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50LnJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3XTtcbiAgICAgICAgICAgICAgICBjYXNlIDE1OiByZXR1cm4gWzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHVwZGF0ZUNhdGVnb3J5O1xuZnVuY3Rpb24gdXBkYXRlQ2F0ZWdvcnkoX2EpIHtcbiAgICB2YXIgY2F0ZWdvcnlfaWQgPSBfYS5jYXRlZ29yeV9pZCwgdXNlcl9pZCA9IF9hLnVzZXJfaWQsIG5hbWUgPSBfYS5uYW1lLCBkZXNjcmlwdGlvbiA9IF9hLmRlc2NyaXB0aW9uLCBjb2xvciA9IF9hLmNvbG9yO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICByZXR1cm4gWzJdO1xuICAgIH0pOyB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHVwZGF0ZUNhdGVnb3J5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==