exports.id = "main";
exports.modules = {

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
dotenv.config();
if (!process.env.PORT) {
    process.exit(1);
}
var app = express_1.default();
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
console.log('hello world');
var PORT = parseFloat(process.env.PORT) || 4444;
var server = app.listen(PORT, function () {
    console.log("server running on port: " + PORT);
});
if (true) {
    module.hot.accept();
    module.hot.dispose(function () { return server.close(); });
}


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCwwQkFBMEIsbUJBQU8sQ0FBQyxzQkFBUTtBQUMxQyxnQ0FBZ0MsbUJBQU8sQ0FBQyx3QkFBUztBQUNqRCw2QkFBNkIsbUJBQU8sQ0FBQyxrQkFBTTtBQUMzQywrQkFBK0IsbUJBQU8sQ0FBQyxzQkFBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsSUFBSSxJQUFVO0FBQ2Q7QUFDQSxvQ0FBb0MsdUJBQXVCLEVBQUU7QUFDN0QiLCJmaWxlIjoiLmhvdC9tYWluLjA4NDNkNGMxM2NlMjBjNGNkOGViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBkb3RlbnYgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcImRvdGVudlwiKSk7XG52YXIgZXhwcmVzc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJleHByZXNzXCIpKTtcbnZhciBjb3JzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImNvcnNcIikpO1xudmFyIGhlbG1ldF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJoZWxtZXRcIikpO1xuZG90ZW52LmNvbmZpZygpO1xuaWYgKCFwcm9jZXNzLmVudi5QT1JUKSB7XG4gICAgcHJvY2Vzcy5leGl0KDEpO1xufVxudmFyIGFwcCA9IGV4cHJlc3NfMS5kZWZhdWx0KCk7XG5hcHAudXNlKGhlbG1ldF8xLmRlZmF1bHQoKSk7XG5hcHAudXNlKGNvcnNfMS5kZWZhdWx0KCkpO1xuYXBwLnVzZShleHByZXNzXzEuZGVmYXVsdC5qc29uKCkpO1xuY29uc29sZS5sb2coJ2hlbGxvIHdvcmxkJyk7XG52YXIgUE9SVCA9IHBhcnNlRmxvYXQocHJvY2Vzcy5lbnYuUE9SVCkgfHwgNDQ0NDtcbnZhciBzZXJ2ZXIgPSBhcHAubGlzdGVuKFBPUlQsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcInNlcnZlciBydW5uaW5nIG9uIHBvcnQ6IFwiICsgUE9SVCk7XG59KTtcbmlmIChtb2R1bGUuaG90KSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyLmNsb3NlKCk7IH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==