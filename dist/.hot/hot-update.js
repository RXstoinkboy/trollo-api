exports.id = "main";
exports.modules = {

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ApolloServer = __webpack_require__(/*! apollo-server */ "apollo-server").ApolloServer;
var typeDefs = __webpack_require__(/*! ./schemas/type-defs */ "./src/schemas/type-defs.ts");
var PORT = process.env.PORT || 4444;
if (true) {
    module.hot.accept();
    module.hot.dispose(function () { return server.stop(); });
}
var server = new ApolloServer({ typeDefs: typeDefs });
server.listen().then(function (data) {
    console.info("Your app is running on: " + data);
});


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2IsbUJBQW1CLG1CQUFPLENBQUMsb0NBQWU7QUFDMUMsZUFBZSxtQkFBTyxDQUFDLHVEQUFxQjtBQUM1QztBQUNBLElBQUksSUFBVTtBQUNkO0FBQ0Esb0NBQW9DLHNCQUFzQixFQUFFO0FBQzVEO0FBQ0EsK0JBQStCLHFCQUFxQjtBQUNwRDtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIuaG90L2hvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBBcG9sbG9TZXJ2ZXIgPSByZXF1aXJlKCdhcG9sbG8tc2VydmVyJykuQXBvbGxvU2VydmVyO1xudmFyIHR5cGVEZWZzID0gcmVxdWlyZSgnLi9zY2hlbWFzL3R5cGUtZGVmcycpO1xudmFyIFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQ0NDQ7XG5pZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlci5zdG9wKCk7IH0pO1xufVxudmFyIHNlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoeyB0eXBlRGVmczogdHlwZURlZnMgfSk7XG5zZXJ2ZXIubGlzdGVuKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgIGNvbnNvbGUuaW5mbyhcIllvdXIgYXBwIGlzIHJ1bm5pbmcgb246IFwiICsgZGF0YSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=