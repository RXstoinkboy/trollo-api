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
var routes_1 = __importDefault(__webpack_require__(/*! ./routes */ "./src/routes/index.ts"));
var body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ "body-parser"));
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
app.use(cookieParser());
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


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCwwQkFBMEIsbUJBQU8sQ0FBQyxzQkFBUTtBQUMxQyxnQ0FBZ0MsbUJBQU8sQ0FBQyx3QkFBUztBQUNqRCw2QkFBNkIsbUJBQU8sQ0FBQyxrQkFBTTtBQUMzQywrQkFBK0IsbUJBQU8sQ0FBQyxzQkFBUTtBQUMvQywrQkFBK0IsbUJBQU8sQ0FBQyx1Q0FBVTtBQUNqRCxvQ0FBb0MsbUJBQU8sQ0FBQyxnQ0FBYTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxJQUFJLElBQVU7QUFDZDtBQUNBLG9DQUFvQyx1QkFBdUIsRUFBRTtBQUM3RCIsImZpbGUiOiIuaG90L21haW4uYzBiMzFkNGE0YWQzNTM5YmFkNGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRvdGVudiA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiZG90ZW52XCIpKTtcbnZhciBleHByZXNzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImV4cHJlc3NcIikpO1xudmFyIGNvcnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiY29yc1wiKSk7XG52YXIgaGVsbWV0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImhlbG1ldFwiKSk7XG52YXIgcm91dGVzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcm91dGVzXCIpKTtcbnZhciBib2R5X3BhcnNlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKSk7XG5kb3RlbnYuY29uZmlnKCk7XG5pZiAoIXByb2Nlc3MuZW52LlBPUlQpIHtcbiAgICBwcm9jZXNzLmV4aXQoMSk7XG59XG52YXIgYXBwID0gZXhwcmVzc18xLmRlZmF1bHQoKTtcbmFwcC51c2UoaGVsbWV0XzEuZGVmYXVsdCgpKTtcbmFwcC51c2UoY29yc18xLmRlZmF1bHQoKSk7XG5hcHAudXNlKGV4cHJlc3NfMS5kZWZhdWx0Lmpzb24oKSk7XG5hcHAudXNlKGJvZHlfcGFyc2VyXzEuZGVmYXVsdC5qc29uKCkpO1xuYXBwLnVzZShib2R5X3BhcnNlcl8xLmRlZmF1bHQudXJsZW5jb2RlZCh7XG4gICAgZXh0ZW5kZWQ6IHRydWUsXG59KSk7XG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcbmFwcC51c2UoJy8nLCByb3V0ZXNfMS5kZWZhdWx0KTtcbmNvbnNvbGUubG9nKCdoZWxsbyB3b3JsZCcpO1xudmFyIFBPUlQgPSBwYXJzZUZsb2F0KHByb2Nlc3MuZW52LlBPUlQpIHx8IDQ0NDQ7XG52YXIgc2VydmVyID0gYXBwLmxpc3RlbihQT1JULCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJzZXJ2ZXIgcnVubmluZyBvbiBwb3J0OiBcIiArIFBPUlQpO1xufSk7XG5pZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlci5jbG9zZSgpOyB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=