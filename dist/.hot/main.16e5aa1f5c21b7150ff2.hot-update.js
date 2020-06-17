exports.id = "main";
exports.modules = {

/***/ "./src/config/passport/index.ts":
/*!**************************************!*\
  !*** ./src/config/passport/index.ts ***!
  \**************************************/
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
var passport_1 = __importDefault(__webpack_require__(/*! passport */ "passport"));
var passport_local_1 = __webpack_require__(/*! passport-local */ "passport-local");
var db_1 = __importDefault(__webpack_require__(/*! ../db */ "./src/config/db/index.ts"));
var bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ "bcrypt"));
var getUserQuery = "select public_id, login, password, active from users where login = $1;";
passport_1.default.use(new passport_local_1.Strategy({
    usernameField: 'login',
    passwordField: 'password',
}, function (login, password, done) { return __awaiter(void 0, void 0, void 0, function () {
    var getUserParams, getUserResult, user, isPasswordCorrect, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                getUserParams = [login];
                return [4, db_1.default.query(getUserQuery, getUserParams)];
            case 1:
                getUserResult = _a.sent();
                user = getUserResult.rows[0];
                return [4, bcrypt_1.default.compare(password, user.password)];
            case 2:
                isPasswordCorrect = _a.sent();
                if (!user)
                    return [2, done(null, false, { message: 'Incorrect login' })];
                if (!isPasswordCorrect)
                    return [2, done(null, false, { message: 'Incorrect password' })];
                return [2, done(null, user, { message: 'Logged in successfully' })];
            case 3:
                err_1 = _a.sent();
                console.error(err_1);
                return [2, done(err_1)];
            case 4: return [2];
        }
    });
}); }));
var passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
var secret = process.env.JWT_SECRET;
passport_1.default.use(new passport_jwt_1.Strategy({
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret,
}, function (jwtPayload, done) {
    console.log(jwtPayload);
    return done(null, jwtPayload);
}));


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(__webpack_require__(/*! dotenv */ "dotenv"));
var express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
var cors_1 = __importDefault(__webpack_require__(/*! cors */ "cors"));
var helmet_1 = __importDefault(__webpack_require__(/*! helmet */ "helmet"));
var routes_1 = __importDefault(__webpack_require__(/*! ./routes */ "./src/routes/index.ts"));
var body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ "body-parser"));
var cookie_parser_1 = __importDefault(__webpack_require__(/*! cookie-parser */ "cookie-parser"));
__webpack_require__(/*! ./config/passport */ "./src/config/passport/index.ts");
dotenv.config();
if (!process.env.PORT) {
    process.exit(1);
}
var app = express_1.default();
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use(cookie_parser_1.default());
app.use('/', routes_1.default);
console.log('hello world');
var PORT = parseFloat(process.env.PORT) || 4444;
var server = app.listen(PORT, function () {
    console.log("server running on port: " + PORT);
});
if (true) {
    module.hot.accept();
    module.hot.dispose(function () { return server.close(); });
}


/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL3Bhc3Nwb3J0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXNzcG9ydC1qd3RcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQSwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsaUNBQWlDLG1CQUFPLENBQUMsMEJBQVU7QUFDbkQsdUJBQXVCLG1CQUFPLENBQUMsc0NBQWdCO0FBQy9DLDJCQUEyQixtQkFBTyxDQUFDLHVDQUFPO0FBQzFDLCtCQUErQixtQkFBTyxDQUFDLHNCQUFRO0FBQy9DLDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9DQUFvQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDZCQUE2QjtBQUMvRTtBQUNBLGtEQUFrRCxnQ0FBZ0M7QUFDbEYsNkNBQTZDLG9DQUFvQztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFLEVBQUU7QUFDTCxxQkFBcUIsbUJBQU8sQ0FBQyxrQ0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3BGWTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCwwQkFBMEIsbUJBQU8sQ0FBQyxzQkFBUTtBQUMxQyxnQ0FBZ0MsbUJBQU8sQ0FBQyx3QkFBUztBQUNqRCw2QkFBNkIsbUJBQU8sQ0FBQyxrQkFBTTtBQUMzQywrQkFBK0IsbUJBQU8sQ0FBQyxzQkFBUTtBQUMvQywrQkFBK0IsbUJBQU8sQ0FBQyx1Q0FBVTtBQUNqRCxvQ0FBb0MsbUJBQU8sQ0FBQyxnQ0FBYTtBQUN6RCxzQ0FBc0MsbUJBQU8sQ0FBQyxvQ0FBZTtBQUM3RCxtQkFBTyxDQUFDLHlEQUFtQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxJQUFJLElBQVU7QUFDZDtBQUNBLG9DQUFvQyx1QkFBdUIsRUFBRTtBQUM3RDs7Ozs7Ozs7Ozs7O0FDMUNBLHlDIiwiZmlsZSI6Ii5ob3QvbWFpbi4xNmU1YWExZjVjMjFiNzE1MGZmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHBhc3Nwb3J0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInBhc3Nwb3J0XCIpKTtcbnZhciBwYXNzcG9ydF9sb2NhbF8xID0gcmVxdWlyZShcInBhc3Nwb3J0LWxvY2FsXCIpO1xudmFyIGRiXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2RiXCIpKTtcbnZhciBiY3J5cHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYmNyeXB0XCIpKTtcbnZhciBnZXRVc2VyUXVlcnkgPSBcInNlbGVjdCBwdWJsaWNfaWQsIGxvZ2luLCBwYXNzd29yZCwgYWN0aXZlIGZyb20gdXNlcnMgd2hlcmUgbG9naW4gPSAkMTtcIjtcbnBhc3Nwb3J0XzEuZGVmYXVsdC51c2UobmV3IHBhc3Nwb3J0X2xvY2FsXzEuU3RyYXRlZ3koe1xuICAgIHVzZXJuYW1lRmllbGQ6ICdsb2dpbicsXG4gICAgcGFzc3dvcmRGaWVsZDogJ3Bhc3N3b3JkJyxcbn0sIGZ1bmN0aW9uIChsb2dpbiwgcGFzc3dvcmQsIGRvbmUpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGdldFVzZXJQYXJhbXMsIGdldFVzZXJSZXN1bHQsIHVzZXIsIGlzUGFzc3dvcmRDb3JyZWN0LCBlcnJfMTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIGdldFVzZXJQYXJhbXMgPSBbbG9naW5dO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCwgZGJfMS5kZWZhdWx0LnF1ZXJ5KGdldFVzZXJRdWVyeSwgZ2V0VXNlclBhcmFtcyldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGdldFVzZXJSZXN1bHQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgdXNlciA9IGdldFVzZXJSZXN1bHQucm93c1swXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQsIGJjcnlwdF8xLmRlZmF1bHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZCldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGlzUGFzc3dvcmRDb3JyZWN0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGlmICghdXNlcilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBkb25lKG51bGwsIGZhbHNlLCB7IG1lc3NhZ2U6ICdJbmNvcnJlY3QgbG9naW4nIH0pXTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzUGFzc3dvcmRDb3JyZWN0KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIGRvbmUobnVsbCwgZmFsc2UsIHsgbWVzc2FnZTogJ0luY29ycmVjdCBwYXNzd29yZCcgfSldO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiwgZG9uZShudWxsLCB1c2VyLCB7IG1lc3NhZ2U6ICdMb2dnZWQgaW4gc3VjY2Vzc2Z1bGx5JyB9KV07XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJfMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyLCBkb25lKGVycl8xKV07XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMl07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KSk7XG52YXIgcGFzc3BvcnRfand0XzEgPSByZXF1aXJlKFwicGFzc3BvcnQtand0XCIpO1xudmFyIHNlY3JldCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQ7XG5wYXNzcG9ydF8xLmRlZmF1bHQudXNlKG5ldyBwYXNzcG9ydF9qd3RfMS5TdHJhdGVneSh7XG4gICAgand0RnJvbVJlcXVlc3Q6IHBhc3Nwb3J0X2p3dF8xLkV4dHJhY3RKd3QuZnJvbUF1dGhIZWFkZXJBc0JlYXJlclRva2VuKCksXG4gICAgc2VjcmV0T3JLZXk6IHNlY3JldCxcbn0sIGZ1bmN0aW9uIChqd3RQYXlsb2FkLCBkb25lKSB7XG4gICAgY29uc29sZS5sb2coand0UGF5bG9hZCk7XG4gICAgcmV0dXJuIGRvbmUobnVsbCwgand0UGF5bG9hZCk7XG59KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBkb3RlbnYgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcImRvdGVudlwiKSk7XG52YXIgZXhwcmVzc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJleHByZXNzXCIpKTtcbnZhciBjb3JzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImNvcnNcIikpO1xudmFyIGhlbG1ldF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJoZWxtZXRcIikpO1xudmFyIHJvdXRlc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlc1wiKSk7XG52YXIgYm9keV9wYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYm9keS1wYXJzZXJcIikpO1xudmFyIGNvb2tpZV9wYXJzZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiY29va2llLXBhcnNlclwiKSk7XG5yZXF1aXJlKFwiLi9jb25maWcvcGFzc3BvcnRcIik7XG5kb3RlbnYuY29uZmlnKCk7XG5pZiAoIXByb2Nlc3MuZW52LlBPUlQpIHtcbiAgICBwcm9jZXNzLmV4aXQoMSk7XG59XG52YXIgYXBwID0gZXhwcmVzc18xLmRlZmF1bHQoKTtcbmFwcC51c2UoaGVsbWV0XzEuZGVmYXVsdCgpKTtcbmFwcC51c2UoY29yc18xLmRlZmF1bHQoKSk7XG5hcHAudXNlKGV4cHJlc3NfMS5kZWZhdWx0Lmpzb24oKSk7XG5hcHAudXNlKGJvZHlfcGFyc2VyXzEuZGVmYXVsdC5qc29uKCkpO1xuYXBwLnVzZShib2R5X3BhcnNlcl8xLmRlZmF1bHQudXJsZW5jb2RlZCh7XG4gICAgZXh0ZW5kZWQ6IHRydWUsXG59KSk7XG5hcHAudXNlKGNvb2tpZV9wYXJzZXJfMS5kZWZhdWx0KCkpO1xuYXBwLnVzZSgnLycsIHJvdXRlc18xLmRlZmF1bHQpO1xuY29uc29sZS5sb2coJ2hlbGxvIHdvcmxkJyk7XG52YXIgUE9SVCA9IHBhcnNlRmxvYXQocHJvY2Vzcy5lbnYuUE9SVCkgfHwgNDQ0NDtcbnZhciBzZXJ2ZXIgPSBhcHAubGlzdGVuKFBPUlQsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcInNlcnZlciBydW5uaW5nIG9uIHBvcnQ6IFwiICsgUE9SVCk7XG59KTtcbmlmIChtb2R1bGUuaG90KSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyLmNsb3NlKCk7IH0pO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtand0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=