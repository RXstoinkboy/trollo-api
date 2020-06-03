exports.id = "main";
exports.modules = {

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


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2NhdGVnb3JpZXMvdXBkYXRlQ2F0ZWdvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDJCQUEyQixtQkFBTyxDQUFDLGlEQUFpQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EiLCJmaWxlIjoiLmhvdC9tYWluLmY4NDhlMDZlYzgzMmI0ODA1MTIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZGJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY29uZmlnL2RiXCIpKTtcbmZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3J5KHJlcSwgcmVzKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EsIGNhdGVnb3J5X2lkLCB1c2VyX2lkLCBuYW1lLCBkZXNjcmlwdGlvbiwgY29sb3IsIGNsaWVudCwgcmVzT2JqZWN0LCB1c2Vyc0NhdGVnb3JpZXNQYXJhbXMsIHVzZXJzQ2F0ZWdvcmllc1Jlc3VsdCwgb191c2VyX2lkLCBjYXRlZ29yaWVzRGV0YWlsc1BhcmFtcywgdXNlcnNDYXRlZ29yaWVzRGV0YWlsc1Jlc3VsdCwgX2IsIG9fZGVzY3JpcHRpb24sIG9fY29sb3IsIGluc2VydERldGFpbHNQYXJhbXMsIGluc2VydERldGFpbHNSZXN1bHRzLCBfYywgb19kZXNjcmlwdGlvbiwgb19jb2xvciwgY2F0ZWdvcmllc1BhcmFtcywgY2F0ZWdvcmllc1F1ZXJ5UmVzdWx0LCBvX25hbWUsIGVycl8xO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9kKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9kLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBfYSA9IHJlcS5ib2R5LCBjYXRlZ29yeV9pZCA9IF9hLmNhdGVnb3J5X2lkLCB1c2VyX2lkID0gX2EudXNlcl9pZCwgbmFtZSA9IF9hLm5hbWUsIGRlc2NyaXB0aW9uID0gX2EuZGVzY3JpcHRpb24sIGNvbG9yID0gX2EuY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgZGJfMS5kZWZhdWx0LmNvbm5lY3QoKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBjbGllbnQgPSBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIF9kLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIF9kLnRyeXMucHVzaChbMiwgMTIsIDE0LCAxNV0pO1xuICAgICAgICAgICAgICAgICAgICByZXNPYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeV9pZDogY2F0ZWdvcnlfaWQsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgY2xpZW50LnF1ZXJ5KCdCRUdJTjsnKV07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdXNlcl9pZCkgcmV0dXJuIFszLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgdXNlcnNDYXRlZ29yaWVzUGFyYW1zID0gW2NhdGVnb3J5X2lkLCB1c2VyX2lkXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBjbGllbnQucXVlcnkodXNlcnNDYXRlZ29yaWVzUXVlcnksIHVzZXJzQ2F0ZWdvcmllc1BhcmFtcyldO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgdXNlcnNDYXRlZ29yaWVzUmVzdWx0ID0gX2Quc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBvX3VzZXJfaWQgPSB1c2Vyc0NhdGVnb3JpZXNSZXN1bHQucm93c1swXS51c2VyX2lkO1xuICAgICAgICAgICAgICAgICAgICByZXNPYmplY3QudXNlcl9pZCA9IG9fdXNlcl9pZDtcbiAgICAgICAgICAgICAgICAgICAgX2QubGFiZWwgPSA1O1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZGVzY3JpcHRpb24gfHwgY29sb3IpKSByZXR1cm4gWzMsIDhdO1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzRGV0YWlsc1BhcmFtcyA9IFtjYXRlZ29yeV9pZCwgZGVzY3JpcHRpb24sIGNvbG9yXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBjbGllbnQucXVlcnkoY2F0ZWdvcmllc0RldGFpbHNRdWVyeSwgY2F0ZWdvcmllc0RldGFpbHNQYXJhbXMpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIHVzZXJzQ2F0ZWdvcmllc0RldGFpbHNSZXN1bHQgPSBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2Vyc0NhdGVnb3JpZXNEZXRhaWxzUmVzdWx0LnJvd3NbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iID0gdXNlcnNDYXRlZ29yaWVzRGV0YWlsc1Jlc3VsdC5yb3dzWzBdLCBvX2Rlc2NyaXB0aW9uID0gX2IuZGVzY3JpcHRpb24sIG9fY29sb3IgPSBfYi5jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc09iamVjdC5kZXNjcmlwdGlvbiA9IG9fZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNPYmplY3QuY29sb3IgPSBvX2NvbG9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghIXVzZXJzQ2F0ZWdvcmllc0RldGFpbHNSZXN1bHQucm93c1swXSkgcmV0dXJuIFszLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0RGV0YWlsc1BhcmFtcyA9IFtjYXRlZ29yeV9pZCwgZGVzY3JpcHRpb24sIGNvbG9yXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBjbGllbnQucXVlcnkoaW5zZXJ0RGV0YWlsc1F1ZXJ5LCBpbnNlcnREZXRhaWxzUGFyYW1zKV07XG4gICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICBpbnNlcnREZXRhaWxzUmVzdWx0cyA9IF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgX2MgPSBpbnNlcnREZXRhaWxzUmVzdWx0cy5yb3dzWzBdLCBvX2Rlc2NyaXB0aW9uID0gX2MuZGVzY3JpcHRpb24sIG9fY29sb3IgPSBfYy5jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgcmVzT2JqZWN0LmRlc2NyaXB0aW9uID0gb19kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmVzT2JqZWN0LmNvbG9yID0gb19jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgX2QubGFiZWwgPSA4O1xuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuYW1lKSByZXR1cm4gWzMsIDEwXTtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllc1BhcmFtcyA9IFtjYXRlZ29yeV9pZCwgbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgY2xpZW50LnF1ZXJ5KGNhdGVnb3JpZXNRdWVyeSwgY2F0ZWdvcmllc1BhcmFtcyldO1xuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllc1F1ZXJ5UmVzdWx0ID0gX2Quc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBvX25hbWUgPSBjYXRlZ29yaWVzUXVlcnlSZXN1bHQucm93c1swXS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICByZXNPYmplY3QubmFtZSA9IG9fbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgX2QubGFiZWwgPSAxMDtcbiAgICAgICAgICAgICAgICBjYXNlIDEwOiByZXR1cm4gWzQsIGNsaWVudC5xdWVyeSgnQ09NTUlUOycpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVcGRhdGUgd2FzIHN1Y2Nlc3NmdWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzT2JqZWN0OiByZXNPYmplY3QsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDE1XTtcbiAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICBlcnJfMSA9IF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBjbGllbnQucXVlcnkoJ1JPTExCQUNLOycpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyXzEpO1xuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCgnU29ycnksIHdlIGhhZCBpbnRlbmVhbCBlcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDE1XTtcbiAgICAgICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICAgICAgICBjbGllbnQucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzddO1xuICAgICAgICAgICAgICAgIGNhc2UgMTU6IHJldHVybiBbMl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gdXBkYXRlQ2F0ZWdvcnk7XG4iXSwic291cmNlUm9vdCI6IiJ9