exports.id = "main";
exports.modules = {

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
var createUser_1 = __webpack_require__(/*! ./createUser */ "./src/routes/users/createUser.ts");
var deleteUser_1 = __webpack_require__(/*! ./deleteUser */ "./src/routes/users/deleteUser.ts");
var updatePassword_1 = __webpack_require__(/*! ./updatePassword */ "./src/routes/users/updatePassword.ts");
var users = express_1.default();
users.post('/', createUser_1.createUser);
users.delete('/', deleteUser_1.deleteUser);
users.put('/password', updatePassword_1.updatePassword);
exports.default = users;


/***/ }),

/***/ "./src/routes/users/updatePassword.ts":
/*!********************************************!*\
  !*** ./src/routes/users/updatePassword.ts ***!
  \********************************************/
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
var getUserDataQuery = 'select * from users where public_id = $1;';
var updateQuery = "\n    update users set\n        password = $2\n    where public_id = $1\n    returning password;\n";
function updatePassword(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, public_id, password, repeat_password, new_password, repeat_new_password, client, getUserParams, userQueryResult, _b, db_id, db_active, db_login, db_password, user, updateParams, updateQueryResult, confirmationPass, err_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = req.body, public_id = _a.public_id, password = _a.password, repeat_password = _a.repeat_password, new_password = _a.new_password, repeat_new_password = _a.repeat_new_password;
                    return [4, db_1.default.connect()];
                case 1:
                    client = _c.sent();
                    _c.label = 2;
                case 2:
                    _c.trys.push([2, 6, 7, 8]);
                    getUserParams = [public_id];
                    return [4, client.query(getUserDataQuery, getUserParams)];
                case 3:
                    userQueryResult = _c.sent();
                    _b = userQueryResult.rows[0], db_id = _b.public_id, db_active = _b.active, db_login = _b.login, db_password = _b.password;
                    user = {
                        public_id: db_id,
                        active: db_active,
                        login: db_login,
                        password: db_password,
                    };
                    if (!(password === repeat_password &&
                        password === user.db_password &&
                        new_password === repeat_new_password)) return [3, 5];
                    updateParams = [public_id, new_password];
                    return [4, db_1.default.query(updateQuery, updateParams)];
                case 4:
                    updateQueryResult = _c.sent();
                    confirmationPass = updateQueryResult.rows[0].password.password;
                    console.log(confirmationPass);
                    if (confirmationPass === new_password) {
                        res.status(200).json({ message: 'Password update successful' });
                    }
                    res.status(400).send('Credentials were not ok');
                    _c.label = 5;
                case 5: return [3, 8];
                case 6:
                    err_1 = _c.sent();
                    console.error(err_1);
                    res.status(500).send('Sorry, we had an error on our side');
                    return [3, 8];
                case 7:
                    client.release();
                    return [7];
                case 8: return [2];
            }
        });
    });
}
exports.updatePassword = updatePassword;


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3VzZXJzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvdXNlcnMvdXBkYXRlUGFzc3dvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0NBQWdDLG1CQUFPLENBQUMsd0JBQVM7QUFDakQsbUJBQW1CLG1CQUFPLENBQUMsc0RBQWM7QUFDekMsbUJBQW1CLG1CQUFPLENBQUMsc0RBQWM7QUFDekMsdUJBQXVCLG1CQUFPLENBQUMsOERBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiYTtBQUNiO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDJCQUEyQixtQkFBTyxDQUFDLGlEQUFpQjtBQUNwRCxpRUFBaUU7QUFDakUsbUhBQW1IO0FBQ25IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHdDQUF3QztBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBIiwiZmlsZSI6Ii5ob3QvbWFpbi4xZWY0MGI0MjQ0MGQwMzQzMzdjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZXhwcmVzc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJleHByZXNzXCIpKTtcbnZhciBjcmVhdGVVc2VyXzEgPSByZXF1aXJlKFwiLi9jcmVhdGVVc2VyXCIpO1xudmFyIGRlbGV0ZVVzZXJfMSA9IHJlcXVpcmUoXCIuL2RlbGV0ZVVzZXJcIik7XG52YXIgdXBkYXRlUGFzc3dvcmRfMSA9IHJlcXVpcmUoXCIuL3VwZGF0ZVBhc3N3b3JkXCIpO1xudmFyIHVzZXJzID0gZXhwcmVzc18xLmRlZmF1bHQoKTtcbnVzZXJzLnBvc3QoJy8nLCBjcmVhdGVVc2VyXzEuY3JlYXRlVXNlcik7XG51c2Vycy5kZWxldGUoJy8nLCBkZWxldGVVc2VyXzEuZGVsZXRlVXNlcik7XG51c2Vycy5wdXQoJy9wYXNzd29yZCcsIHVwZGF0ZVBhc3N3b3JkXzEudXBkYXRlUGFzc3dvcmQpO1xuZXhwb3J0cy5kZWZhdWx0ID0gdXNlcnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZGJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY29uZmlnL2RiXCIpKTtcbnZhciBnZXRVc2VyRGF0YVF1ZXJ5ID0gJ3NlbGVjdCAqIGZyb20gdXNlcnMgd2hlcmUgcHVibGljX2lkID0gJDE7JztcbnZhciB1cGRhdGVRdWVyeSA9IFwiXFxuICAgIHVwZGF0ZSB1c2VycyBzZXRcXG4gICAgICAgIHBhc3N3b3JkID0gJDJcXG4gICAgd2hlcmUgcHVibGljX2lkID0gJDFcXG4gICAgcmV0dXJuaW5nIHBhc3N3b3JkO1xcblwiO1xuZnVuY3Rpb24gdXBkYXRlUGFzc3dvcmQocmVxLCByZXMpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSwgcHVibGljX2lkLCBwYXNzd29yZCwgcmVwZWF0X3Bhc3N3b3JkLCBuZXdfcGFzc3dvcmQsIHJlcGVhdF9uZXdfcGFzc3dvcmQsIGNsaWVudCwgZ2V0VXNlclBhcmFtcywgdXNlclF1ZXJ5UmVzdWx0LCBfYiwgZGJfaWQsIGRiX2FjdGl2ZSwgZGJfbG9naW4sIGRiX3Bhc3N3b3JkLCB1c2VyLCB1cGRhdGVQYXJhbXMsIHVwZGF0ZVF1ZXJ5UmVzdWx0LCBjb25maXJtYXRpb25QYXNzLCBlcnJfMTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgX2EgPSByZXEuYm9keSwgcHVibGljX2lkID0gX2EucHVibGljX2lkLCBwYXNzd29yZCA9IF9hLnBhc3N3b3JkLCByZXBlYXRfcGFzc3dvcmQgPSBfYS5yZXBlYXRfcGFzc3dvcmQsIG5ld19wYXNzd29yZCA9IF9hLm5ld19wYXNzd29yZCwgcmVwZWF0X25ld19wYXNzd29yZCA9IF9hLnJlcGVhdF9uZXdfcGFzc3dvcmQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgZGJfMS5kZWZhdWx0LmNvbm5lY3QoKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBjbGllbnQgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIF9jLnRyeXMucHVzaChbMiwgNiwgNywgOF0pO1xuICAgICAgICAgICAgICAgICAgICBnZXRVc2VyUGFyYW1zID0gW3B1YmxpY19pZF07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgY2xpZW50LnF1ZXJ5KGdldFVzZXJEYXRhUXVlcnksIGdldFVzZXJQYXJhbXMpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHVzZXJRdWVyeVJlc3VsdCA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgX2IgPSB1c2VyUXVlcnlSZXN1bHQucm93c1swXSwgZGJfaWQgPSBfYi5wdWJsaWNfaWQsIGRiX2FjdGl2ZSA9IF9iLmFjdGl2ZSwgZGJfbG9naW4gPSBfYi5sb2dpbiwgZGJfcGFzc3dvcmQgPSBfYi5wYXNzd29yZDtcbiAgICAgICAgICAgICAgICAgICAgdXNlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpY19pZDogZGJfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGRiX2FjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luOiBkYl9sb2dpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBkYl9wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEocGFzc3dvcmQgPT09IHJlcGVhdF9wYXNzd29yZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQgPT09IHVzZXIuZGJfcGFzc3dvcmQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld19wYXNzd29yZCA9PT0gcmVwZWF0X25ld19wYXNzd29yZCkpIHJldHVybiBbMywgNV07XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBhcmFtcyA9IFtwdWJsaWNfaWQsIG5ld19wYXNzd29yZF07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgZGJfMS5kZWZhdWx0LnF1ZXJ5KHVwZGF0ZVF1ZXJ5LCB1cGRhdGVQYXJhbXMpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVF1ZXJ5UmVzdWx0ID0gX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtYXRpb25QYXNzID0gdXBkYXRlUXVlcnlSZXN1bHQucm93c1swXS5wYXNzd29yZC5wYXNzd29yZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29uZmlybWF0aW9uUGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maXJtYXRpb25QYXNzID09PSBuZXdfcGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ1Bhc3N3b3JkIHVwZGF0ZSBzdWNjZXNzZnVsJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCgnQ3JlZGVudGlhbHMgd2VyZSBub3Qgb2snKTtcbiAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSA1O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFszLCA4XTtcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIGVycl8xID0gX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycl8xKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoJ1NvcnJ5LCB3ZSBoYWQgYW4gZXJyb3Igb24gb3VyIHNpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszLCA4XTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudC5yZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbN107XG4gICAgICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMudXBkYXRlUGFzc3dvcmQgPSB1cGRhdGVQYXNzd29yZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=