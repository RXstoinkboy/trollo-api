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
var categoriesQuery = "\n    update categories set\n        name = coalesce($2, name)\n    where public_id = $1\n    returning name;\n";
var categoriesDetailsQuery = "\n    update categories_details set\n        description = coalesce($2, description),\n        color = coalesce($3, color)\n    where category_id = $1\n    returning description, color;\n";
var usersCategoriesQuery = "\n    update users_categories set\n        user_id = coalesce($2, user_id)\n    where category_id = $1\n    returning user_id\n";
function updateCategory(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, category_id, user_id, name, description, color, client, resObject, usersCategoriesParams, usersCategoriesResult, o_user_id, categoriesDetailsParams, usersCategoriesDetailsResult, _b, o_description, o_color, categoriesParams, categoriesQueryResult, o_name, err_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = req.body, category_id = _a.category_id, user_id = _a.user_id, name = _a.name, description = _a.description, color = _a.color;
                    console.log('req.body', req.body);
                    return [4, db_1.default.connect()];
                case 1:
                    client = _c.sent();
                    _c.label = 2;
                case 2:
                    _c.trys.push([2, 11, 13, 14]);
                    resObject = {
                        category_id: category_id,
                    };
                    return [4, client.query('BEGIN;')];
                case 3:
                    _c.sent();
                    if (!user_id) return [3, 5];
                    usersCategoriesParams = [category_id, user_id];
                    return [4, client.query(usersCategoriesQuery, usersCategoriesParams)];
                case 4:
                    usersCategoriesResult = _c.sent();
                    o_user_id = usersCategoriesResult.rows[0].user_id;
                    resObject.user_id = o_user_id;
                    _c.label = 5;
                case 5:
                    if (!(description || color)) return [3, 7];
                    categoriesDetailsParams = [category_id, description, color];
                    return [4, client.query(categoriesDetailsQuery, categoriesDetailsParams)];
                case 6:
                    usersCategoriesDetailsResult = _c.sent();
                    _b = usersCategoriesDetailsResult.rows[0], o_description = _b.description, o_color = _b.color;
                    console.log(usersCategoriesDetailsResult.rows[0]);
                    resObject.description = o_description;
                    resObject.color = o_color;
                    _c.label = 7;
                case 7:
                    if (!name) return [3, 9];
                    console.log('poszlo w name');
                    categoriesParams = [name, category_id];
                    console.log('name', o_name);
                    return [4, client.query(categoriesQuery, categoriesParams)];
                case 8:
                    categoriesQueryResult = _c.sent();
                    o_name = categoriesQueryResult.rows[0].name;
                    resObject.name = o_name;
                    _c.label = 9;
                case 9: return [4, client.query('COMMIT;')];
                case 10:
                    _c.sent();
                    res.status(200).json({
                        message: 'Update was successful',
                        resObject: resObject,
                    });
                    return [3, 14];
                case 11:
                    err_1 = _c.sent();
                    return [4, client.query('ROLLBACK;')];
                case 12:
                    _c.sent();
                    console.error(err_1);
                    res.status(500).send('Sorry, we had inteneal error');
                    return [3, 14];
                case 13:
                    client.release();
                    return [7];
                case 14:
                    console.log('update category');
                    return [2];
            }
        });
    });
}
exports.default = updateCategory;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2NhdGVnb3JpZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9jYXRlZ29yaWVzL3VwZGF0ZUNhdGVnb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGdDQUFnQyxtQkFBTyxDQUFDLHdCQUFTO0FBQ2pELHVDQUF1QyxtQkFBTyxDQUFDLG1FQUFrQjtBQUNqRSx1Q0FBdUMsbUJBQU8sQ0FBQyxtRUFBa0I7QUFDakUsdUNBQXVDLG1CQUFPLENBQUMsbUVBQWtCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiYTtBQUNiO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDJCQUEyQixtQkFBTyxDQUFDLGlEQUFpQjtBQUNwRCxvSUFBb0k7QUFDcEksdU5BQXVOO0FBQ3ZOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQSIsImZpbGUiOiIuaG90L21haW4uNWU0NTZkYTkwNWI4ODViZmRiMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGV4cHJlc3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZXhwcmVzc1wiKSk7XG52YXIgY3JlYXRlQ2F0ZWdvcnlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jcmVhdGVDYXRlZ29yeVwiKSk7XG52YXIgZGVsZXRlQ2F0ZWdvcnlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9kZWxldGVDYXRlZ29yeVwiKSk7XG52YXIgdXBkYXRlQ2F0ZWdvcnlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi91cGRhdGVDYXRlZ29yeVwiKSk7XG52YXIgY2F0ZWdvcmllcyA9IGV4cHJlc3NfMS5kZWZhdWx0KCk7XG5jYXRlZ29yaWVzLnBvc3QoJy8nLCBjcmVhdGVDYXRlZ29yeV8xLmRlZmF1bHQpO1xuY2F0ZWdvcmllcy5kZWxldGUoJy8nLCBkZWxldGVDYXRlZ29yeV8xLmRlZmF1bHQpO1xuY2F0ZWdvcmllcy5wdXQoJy8nLCB1cGRhdGVDYXRlZ29yeV8xLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gY2F0ZWdvcmllcztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBkYl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb25maWcvZGJcIikpO1xudmFyIGNhdGVnb3JpZXNRdWVyeSA9IFwiXFxuICAgIHVwZGF0ZSBjYXRlZ29yaWVzIHNldFxcbiAgICAgICAgbmFtZSA9IGNvYWxlc2NlKCQyLCBuYW1lKVxcbiAgICB3aGVyZSBwdWJsaWNfaWQgPSAkMVxcbiAgICByZXR1cm5pbmcgbmFtZTtcXG5cIjtcbnZhciBjYXRlZ29yaWVzRGV0YWlsc1F1ZXJ5ID0gXCJcXG4gICAgdXBkYXRlIGNhdGVnb3JpZXNfZGV0YWlscyBzZXRcXG4gICAgICAgIGRlc2NyaXB0aW9uID0gY29hbGVzY2UoJDIsIGRlc2NyaXB0aW9uKSxcXG4gICAgICAgIGNvbG9yID0gY29hbGVzY2UoJDMsIGNvbG9yKVxcbiAgICB3aGVyZSBjYXRlZ29yeV9pZCA9ICQxXFxuICAgIHJldHVybmluZyBkZXNjcmlwdGlvbiwgY29sb3I7XFxuXCI7XG52YXIgdXNlcnNDYXRlZ29yaWVzUXVlcnkgPSBcIlxcbiAgICB1cGRhdGUgdXNlcnNfY2F0ZWdvcmllcyBzZXRcXG4gICAgICAgIHVzZXJfaWQgPSBjb2FsZXNjZSgkMiwgdXNlcl9pZClcXG4gICAgd2hlcmUgY2F0ZWdvcnlfaWQgPSAkMVxcbiAgICByZXR1cm5pbmcgdXNlcl9pZFxcblwiO1xuZnVuY3Rpb24gdXBkYXRlQ2F0ZWdvcnkocmVxLCByZXMpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSwgY2F0ZWdvcnlfaWQsIHVzZXJfaWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBjb2xvciwgY2xpZW50LCByZXNPYmplY3QsIHVzZXJzQ2F0ZWdvcmllc1BhcmFtcywgdXNlcnNDYXRlZ29yaWVzUmVzdWx0LCBvX3VzZXJfaWQsIGNhdGVnb3JpZXNEZXRhaWxzUGFyYW1zLCB1c2Vyc0NhdGVnb3JpZXNEZXRhaWxzUmVzdWx0LCBfYiwgb19kZXNjcmlwdGlvbiwgb19jb2xvciwgY2F0ZWdvcmllc1BhcmFtcywgY2F0ZWdvcmllc1F1ZXJ5UmVzdWx0LCBvX25hbWUsIGVycl8xO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBfYSA9IHJlcS5ib2R5LCBjYXRlZ29yeV9pZCA9IF9hLmNhdGVnb3J5X2lkLCB1c2VyX2lkID0gX2EudXNlcl9pZCwgbmFtZSA9IF9hLm5hbWUsIGRlc2NyaXB0aW9uID0gX2EuZGVzY3JpcHRpb24sIGNvbG9yID0gX2EuY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXEuYm9keScsIHJlcS5ib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBkYl8xLmRlZmF1bHQuY29ubmVjdCgpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudCA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgX2MudHJ5cy5wdXNoKFsyLCAxMSwgMTMsIDE0XSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc09iamVjdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5X2lkOiBjYXRlZ29yeV9pZCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBjbGllbnQucXVlcnkoJ0JFR0lOOycpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF1c2VyX2lkKSByZXR1cm4gWzMsIDVdO1xuICAgICAgICAgICAgICAgICAgICB1c2Vyc0NhdGVnb3JpZXNQYXJhbXMgPSBbY2F0ZWdvcnlfaWQsIHVzZXJfaWRdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGNsaWVudC5xdWVyeSh1c2Vyc0NhdGVnb3JpZXNRdWVyeSwgdXNlcnNDYXRlZ29yaWVzUGFyYW1zKV07XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICB1c2Vyc0NhdGVnb3JpZXNSZXN1bHQgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIG9fdXNlcl9pZCA9IHVzZXJzQ2F0ZWdvcmllc1Jlc3VsdC5yb3dzWzBdLnVzZXJfaWQ7XG4gICAgICAgICAgICAgICAgICAgIHJlc09iamVjdC51c2VyX2lkID0gb191c2VyX2lkO1xuICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDU7XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICBpZiAoIShkZXNjcmlwdGlvbiB8fCBjb2xvcikpIHJldHVybiBbMywgN107XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXNEZXRhaWxzUGFyYW1zID0gW2NhdGVnb3J5X2lkLCBkZXNjcmlwdGlvbiwgY29sb3JdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGNsaWVudC5xdWVyeShjYXRlZ29yaWVzRGV0YWlsc1F1ZXJ5LCBjYXRlZ29yaWVzRGV0YWlsc1BhcmFtcyldO1xuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgdXNlcnNDYXRlZ29yaWVzRGV0YWlsc1Jlc3VsdCA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgX2IgPSB1c2Vyc0NhdGVnb3JpZXNEZXRhaWxzUmVzdWx0LnJvd3NbMF0sIG9fZGVzY3JpcHRpb24gPSBfYi5kZXNjcmlwdGlvbiwgb19jb2xvciA9IF9iLmNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2Vyc0NhdGVnb3JpZXNEZXRhaWxzUmVzdWx0LnJvd3NbMF0pO1xuICAgICAgICAgICAgICAgICAgICByZXNPYmplY3QuZGVzY3JpcHRpb24gPSBvX2Rlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXNPYmplY3QuY29sb3IgPSBvX2NvbG9yO1xuICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDc7XG4gICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5hbWUpIHJldHVybiBbMywgOV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwb3N6bG8gdyBuYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXNQYXJhbXMgPSBbbmFtZSwgY2F0ZWdvcnlfaWRdO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbmFtZScsIG9fbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgY2xpZW50LnF1ZXJ5KGNhdGVnb3JpZXNRdWVyeSwgY2F0ZWdvcmllc1BhcmFtcyldO1xuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllc1F1ZXJ5UmVzdWx0ID0gX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBvX25hbWUgPSBjYXRlZ29yaWVzUXVlcnlSZXN1bHQucm93c1swXS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICByZXNPYmplY3QubmFtZSA9IG9fbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSA5O1xuICAgICAgICAgICAgICAgIGNhc2UgOTogcmV0dXJuIFs0LCBjbGllbnQucXVlcnkoJ0NPTU1JVDsnKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVXBkYXRlIHdhcyBzdWNjZXNzZnVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc09iamVjdDogcmVzT2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAxNF07XG4gICAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgZXJyXzEgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgY2xpZW50LnF1ZXJ5KCdST0xMQkFDSzsnKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycl8xKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoJ1NvcnJ5LCB3ZSBoYWQgaW50ZW5lYWwgZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCAxNF07XG4gICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50LnJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3XTtcbiAgICAgICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlIGNhdGVnb3J5Jyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdXBkYXRlQ2F0ZWdvcnk7XG4iXSwic291cmNlUm9vdCI6IiJ9