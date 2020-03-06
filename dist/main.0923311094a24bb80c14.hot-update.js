exports.id = "main";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ApolloServer = __webpack_require__(/*! apollo-server */ "apollo-server").ApolloServer;
var typeDefs = __webpack_require__(/*! ./schemas/type-defs */ "./src/schemas/type-defs.ts");
var PORT = process.env.PORT || 4444;
if (true) {
    module.hot.accept();
    module.hot.dispose(function () { return console.log('module disposed'); });
}
var server = new ApolloServer(typeDefs);
server.listen().then(function (_a) {
    var url = _a.url;
    console.info("Your app is running on: " + url);
});


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiLG1CQUFtQixtQkFBTyxDQUFDLG9DQUFlO0FBQzFDLGVBQWUsbUJBQU8sQ0FBQyx1REFBcUI7QUFDNUM7QUFDQSxJQUFJLElBQVU7QUFDZDtBQUNBLG9DQUFvQyx1Q0FBdUMsRUFBRTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJtYWluLjA5MjMzMTEwOTRhMjRiYjgwYzE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBBcG9sbG9TZXJ2ZXIgPSByZXF1aXJlKCdhcG9sbG8tc2VydmVyJykuQXBvbGxvU2VydmVyO1xudmFyIHR5cGVEZWZzID0gcmVxdWlyZSgnLi9zY2hlbWFzL3R5cGUtZGVmcycpO1xudmFyIFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQ0NDQ7XG5pZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbnNvbGUubG9nKCdtb2R1bGUgZGlzcG9zZWQnKTsgfSk7XG59XG52YXIgc2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih0eXBlRGVmcyk7XG5zZXJ2ZXIubGlzdGVuKCkudGhlbihmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgdXJsID0gX2EudXJsO1xuICAgIGNvbnNvbGUuaW5mbyhcIllvdXIgYXBwIGlzIHJ1bm5pbmcgb246IFwiICsgdXJsKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==