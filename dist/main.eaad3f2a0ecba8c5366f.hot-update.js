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
var server = new ApolloServer({ typeDefs: typeDefs });
server.listen().then(function (data) {
    console.info("Your app is running on: " + data);
});


/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiLG1CQUFtQixtQkFBTyxDQUFDLG9DQUFlO0FBQzFDLGVBQWUsbUJBQU8sQ0FBQyx1REFBcUI7QUFDNUM7QUFDQSxJQUFJLElBQVU7QUFDZDtBQUNBLG9DQUFvQyx1Q0FBdUMsRUFBRTtBQUM3RTtBQUNBLCtCQUErQixxQkFBcUI7QUFDcEQ7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoibWFpbi5lYWFkM2YyYTBlY2JhOGM1MzY2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQXBvbGxvU2VydmVyID0gcmVxdWlyZSgnYXBvbGxvLXNlcnZlcicpLkFwb2xsb1NlcnZlcjtcbnZhciB0eXBlRGVmcyA9IHJlcXVpcmUoJy4vc2NoZW1hcy90eXBlLWRlZnMnKTtcbnZhciBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA0NDQ0O1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7IHJldHVybiBjb25zb2xlLmxvZygnbW9kdWxlIGRpc3Bvc2VkJyk7IH0pO1xufVxudmFyIHNlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoeyB0eXBlRGVmczogdHlwZURlZnMgfSk7XG5zZXJ2ZXIubGlzdGVuKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgIGNvbnNvbGUuaW5mbyhcIllvdXIgYXBwIGlzIHJ1bm5pbmcgb246IFwiICsgZGF0YSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=