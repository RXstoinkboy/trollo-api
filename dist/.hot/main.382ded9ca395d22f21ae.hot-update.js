exports.id = "main";
exports.modules = {

/***/ "./src/routes/categories/createCategory.ts":
/*!*************************************************!*\
  !*** ./src/routes/categories/createCategory.ts ***!
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
var uuid_1 = __webpack_require__(/*! uuid */ "uuid");
var addCategory = 'insert into categories (public_id, name) values ($1, $2) returning public_id, name;';
var addCategoryDetails = 'insert into categories_details (category_id, description, color) values($1, $2, $3) returning description, color;';
var assignToUserQuery = "insert into users_categories (user_id, category_id) values ($1, $2) returning user_id;";
var public_id = uuid_1.v4();
function createCategory(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, name, description, color, client, categoryParams, categoryDetailsParams, assignToUserParams, addCategoryResult, assignToUserResult, _b, db_id, db_name, o_user_id, detailsResult, _c, description_1, color_1, err_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = req.body, id = _a.user_id, name = _a.name, description = _a.description, color = _a.color;
                    return [4, db_1.default.connect()];
                case 1:
                    client = _d.sent();
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 10, 12, 13]);
                    return [4, client.query('BEGIN;')];
                case 3:
                    _d.sent();
                    categoryParams = [public_id, name];
                    categoryDetailsParams = [
                        public_id,
                        description,
                        color,
                    ];
                    assignToUserParams = [id, public_id];
                    return [4, client.query(addCategory, categoryParams)];
                case 4:
                    addCategoryResult = _d.sent();
                    return [4, client.query(assignToUserQuery, assignToUserParams)];
                case 5:
                    assignToUserResult = _d.sent();
                    _b = addCategoryResult.rows[0], db_id = _b.public_id, db_name = _b.name;
                    o_user_id = assignToUserResult.rows[0].user_id;
                    if (!(description || color)) return [3, 8];
                    return [4, client.query(addCategoryDetails, categoryDetailsParams)];
                case 6:
                    detailsResult = _d.sent();
                    _c = detailsResult.rows[0], description_1 = _c.description, color_1 = _c.color;
                    return [4, client.query('COMMIT;')];
                case 7:
                    _d.sent();
                    res.status(200).json({
                        message: 'Category successfully created',
                        db_name: db_name,
                        db_id: db_id,
                        description: description_1,
                        color: color_1,
                        o_user_id: o_user_id,
                    });
                    _d.label = 8;
                case 8: return [4, client.query('COMMIT;')];
                case 9:
                    _d.sent();
                    res.status(200).json({
                        message: 'Category successfully created',
                        db_name: db_name,
                        db_id: db_id,
                        o_user_id: o_user_id,
                    });
                    return [3, 13];
                case 10:
                    err_1 = _d.sent();
                    return [4, client.query('ROLLBACK;')];
                case 11:
                    _d.sent();
                    res.status(400).json({
                        message: 'Sorry, there was an error while creating category.',
                    });
                    console.error(err_1);
                    return [3, 13];
                case 12:
                    client.release();
                    return [7];
                case 13: return [2];
            }
        });
    });
}
exports.default = createCategory;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2NhdGVnb3JpZXMvY3JlYXRlQ2F0ZWdvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDJCQUEyQixtQkFBTyxDQUFDLGlEQUFpQjtBQUNwRCxhQUFhLG1CQUFPLENBQUMsa0JBQU07QUFDM0Isc0dBQXNHO0FBQ3RHLDJJQUEySTtBQUMzSSwrR0FBK0c7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBIiwiZmlsZSI6Ii5ob3QvbWFpbi4zODJkZWQ5Y2EzOTVkMjJmMjFhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRiXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2NvbmZpZy9kYlwiKSk7XG52YXIgdXVpZF8xID0gcmVxdWlyZShcInV1aWRcIik7XG52YXIgYWRkQ2F0ZWdvcnkgPSAnaW5zZXJ0IGludG8gY2F0ZWdvcmllcyAocHVibGljX2lkLCBuYW1lKSB2YWx1ZXMgKCQxLCAkMikgcmV0dXJuaW5nIHB1YmxpY19pZCwgbmFtZTsnO1xudmFyIGFkZENhdGVnb3J5RGV0YWlscyA9ICdpbnNlcnQgaW50byBjYXRlZ29yaWVzX2RldGFpbHMgKGNhdGVnb3J5X2lkLCBkZXNjcmlwdGlvbiwgY29sb3IpIHZhbHVlcygkMSwgJDIsICQzKSByZXR1cm5pbmcgZGVzY3JpcHRpb24sIGNvbG9yOyc7XG52YXIgYXNzaWduVG9Vc2VyUXVlcnkgPSBcImluc2VydCBpbnRvIHVzZXJzX2NhdGVnb3JpZXMgKHVzZXJfaWQsIGNhdGVnb3J5X2lkKSB2YWx1ZXMgKCQxLCAkMikgcmV0dXJuaW5nIHVzZXJfaWQ7XCI7XG52YXIgcHVibGljX2lkID0gdXVpZF8xLnY0KCk7XG5mdW5jdGlvbiBjcmVhdGVDYXRlZ29yeShyZXEsIHJlcykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hLCBpZCwgbmFtZSwgZGVzY3JpcHRpb24sIGNvbG9yLCBjbGllbnQsIGNhdGVnb3J5UGFyYW1zLCBjYXRlZ29yeURldGFpbHNQYXJhbXMsIGFzc2lnblRvVXNlclBhcmFtcywgYWRkQ2F0ZWdvcnlSZXN1bHQsIGFzc2lnblRvVXNlclJlc3VsdCwgX2IsIGRiX2lkLCBkYl9uYW1lLCBvX3VzZXJfaWQsIGRldGFpbHNSZXN1bHQsIF9jLCBkZXNjcmlwdGlvbl8xLCBjb2xvcl8xLCBlcnJfMTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZCkge1xuICAgICAgICAgICAgc3dpdGNoIChfZC5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgX2EgPSByZXEuYm9keSwgaWQgPSBfYS51c2VyX2lkLCBuYW1lID0gX2EubmFtZSwgZGVzY3JpcHRpb24gPSBfYS5kZXNjcmlwdGlvbiwgY29sb3IgPSBfYS5jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBkYl8xLmRlZmF1bHQuY29ubmVjdCgpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudCA9IF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgX2QubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgX2QudHJ5cy5wdXNoKFsyLCAxMCwgMTIsIDEzXSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgY2xpZW50LnF1ZXJ5KCdCRUdJTjsnKV07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5UGFyYW1zID0gW3B1YmxpY19pZCwgbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5RGV0YWlsc1BhcmFtcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpY19pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIGFzc2lnblRvVXNlclBhcmFtcyA9IFtpZCwgcHVibGljX2lkXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBjbGllbnQucXVlcnkoYWRkQ2F0ZWdvcnksIGNhdGVnb3J5UGFyYW1zKV07XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBhZGRDYXRlZ29yeVJlc3VsdCA9IF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBjbGllbnQucXVlcnkoYXNzaWduVG9Vc2VyUXVlcnksIGFzc2lnblRvVXNlclBhcmFtcyldO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgYXNzaWduVG9Vc2VyUmVzdWx0ID0gX2Quc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBfYiA9IGFkZENhdGVnb3J5UmVzdWx0LnJvd3NbMF0sIGRiX2lkID0gX2IucHVibGljX2lkLCBkYl9uYW1lID0gX2IubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgb191c2VyX2lkID0gYXNzaWduVG9Vc2VyUmVzdWx0LnJvd3NbMF0udXNlcl9pZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZGVzY3JpcHRpb24gfHwgY29sb3IpKSByZXR1cm4gWzMsIDhdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGNsaWVudC5xdWVyeShhZGRDYXRlZ29yeURldGFpbHMsIGNhdGVnb3J5RGV0YWlsc1BhcmFtcyldO1xuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsc1Jlc3VsdCA9IF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgX2MgPSBkZXRhaWxzUmVzdWx0LnJvd3NbMF0sIGRlc2NyaXB0aW9uXzEgPSBfYy5kZXNjcmlwdGlvbiwgY29sb3JfMSA9IF9jLmNvbG9yO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGNsaWVudC5xdWVyeSgnQ09NTUlUOycpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgIF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0NhdGVnb3J5IHN1Y2Nlc3NmdWxseSBjcmVhdGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiX25hbWU6IGRiX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYl9pZDogZGJfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25fMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcl8xLFxuICAgICAgICAgICAgICAgICAgICAgICAgb191c2VyX2lkOiBvX3VzZXJfaWQsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBfZC5sYWJlbCA9IDg7XG4gICAgICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzQsIGNsaWVudC5xdWVyeSgnQ09NTUlUOycpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgIF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0NhdGVnb3J5IHN1Y2Nlc3NmdWxseSBjcmVhdGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiX25hbWU6IGRiX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYl9pZDogZGJfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvX3VzZXJfaWQ6IG9fdXNlcl9pZCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMywgMTNdO1xuICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgIGVycl8xID0gX2Quc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGNsaWVudC5xdWVyeSgnUk9MTEJBQ0s7JyldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgIF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NvcnJ5LCB0aGVyZSB3YXMgYW4gZXJyb3Igd2hpbGUgY3JlYXRpbmcgY2F0ZWdvcnkuJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyXzEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDEzXTtcbiAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICBjbGllbnQucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzddO1xuICAgICAgICAgICAgICAgIGNhc2UgMTM6IHJldHVybiBbMl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQ2F0ZWdvcnk7XG4iXSwic291cmNlUm9vdCI6IiJ9