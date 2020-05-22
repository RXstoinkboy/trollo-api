exports.id = "main";
exports.modules = {

/***/ "./node_modules/cookie-parser/index.js":
/*!*********************************************!*\
  !*** ./node_modules/cookie-parser/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * cookie-parser
 * Copyright(c) 2014 TJ Holowaychuk
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var cookie = __webpack_require__(/*! cookie */ "cookie")
var signature = __webpack_require__(/*! cookie-signature */ "cookie-signature")

/**
 * Module exports.
 * @public
 */

module.exports = cookieParser
module.exports.JSONCookie = JSONCookie
module.exports.JSONCookies = JSONCookies
module.exports.signedCookie = signedCookie
module.exports.signedCookies = signedCookies

/**
 * Parse Cookie header and populate `req.cookies`
 * with an object keyed by the cookie names.
 *
 * @param {string|array} [secret] A string (or array of strings) representing cookie signing secret(s).
 * @param {Object} [options]
 * @return {Function}
 * @public
 */

function cookieParser (secret, options) {
  var secrets = !secret || Array.isArray(secret)
    ? (secret || [])
    : [secret]

  return function cookieParser (req, res, next) {
    if (req.cookies) {
      return next()
    }

    var cookies = req.headers.cookie

    req.secret = secrets[0]
    req.cookies = Object.create(null)
    req.signedCookies = Object.create(null)

    // no cookies
    if (!cookies) {
      return next()
    }

    req.cookies = cookie.parse(cookies, options)

    // parse signed cookies
    if (secrets.length !== 0) {
      req.signedCookies = signedCookies(req.cookies, secrets)
      req.signedCookies = JSONCookies(req.signedCookies)
    }

    // parse JSON cookies
    req.cookies = JSONCookies(req.cookies)

    next()
  }
}

/**
 * Parse JSON cookie string.
 *
 * @param {String} str
 * @return {Object} Parsed object or undefined if not json cookie
 * @public
 */

function JSONCookie (str) {
  if (typeof str !== 'string' || str.substr(0, 2) !== 'j:') {
    return undefined
  }

  try {
    return JSON.parse(str.slice(2))
  } catch (err) {
    return undefined
  }
}

/**
 * Parse JSON cookies.
 *
 * @param {Object} obj
 * @return {Object}
 * @public
 */

function JSONCookies (obj) {
  var cookies = Object.keys(obj)
  var key
  var val

  for (var i = 0; i < cookies.length; i++) {
    key = cookies[i]
    val = JSONCookie(obj[key])

    if (val) {
      obj[key] = val
    }
  }

  return obj
}

/**
 * Parse a signed cookie string, return the decoded value.
 *
 * @param {String} str signed cookie string
 * @param {string|array} secret
 * @return {String} decoded value
 * @public
 */

function signedCookie (str, secret) {
  if (typeof str !== 'string') {
    return undefined
  }

  if (str.substr(0, 2) !== 's:') {
    return str
  }

  var secrets = !secret || Array.isArray(secret)
    ? (secret || [])
    : [secret]

  for (var i = 0; i < secrets.length; i++) {
    var val = signature.unsign(str.slice(2), secrets[i])

    if (val !== false) {
      return val
    }
  }

  return false
}

/**
 * Parse signed cookies, returning an object containing the decoded key/value
 * pairs, while removing the signed key from obj.
 *
 * @param {Object} obj
 * @param {string|array} secret
 * @return {Object}
 * @public
 */

function signedCookies (obj, secret) {
  var cookies = Object.keys(obj)
  var dec
  var key
  var ret = Object.create(null)
  var val

  for (var i = 0; i < cookies.length; i++) {
    key = cookies[i]
    val = obj[key]
    dec = signedCookie(val, secret)

    if (val !== dec) {
      ret[key] = dec
      delete obj[key]
    }
  }

  return ret
}


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
var cookie_parser_1 = __importDefault(__webpack_require__(/*! cookie-parser */ "./node_modules/cookie-parser/index.js"));
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

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "cookie-signature":
/*!***********************************!*\
  !*** external "cookie-signature" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-signature");

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29va2llLXBhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29va2llLXNpZ25hdHVyZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVZOztBQUVaO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzQkFBUTtBQUM3QixnQkFBZ0IsbUJBQU8sQ0FBQywwQ0FBa0I7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLG9CQUFvQjtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsYUFBYTtBQUN4QixZQUFZLE9BQU87QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixvQkFBb0I7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLGFBQWE7QUFDeEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JMYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCwwQkFBMEIsbUJBQU8sQ0FBQyxzQkFBUTtBQUMxQyxnQ0FBZ0MsbUJBQU8sQ0FBQyx3QkFBUztBQUNqRCw2QkFBNkIsbUJBQU8sQ0FBQyxrQkFBTTtBQUMzQywrQkFBK0IsbUJBQU8sQ0FBQyxzQkFBUTtBQUMvQywrQkFBK0IsbUJBQU8sQ0FBQyx1Q0FBVTtBQUNqRCxvQ0FBb0MsbUJBQU8sQ0FBQyxnQ0FBYTtBQUN6RCxzQ0FBc0MsbUJBQU8sQ0FBQyw0REFBZTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxJQUFJLElBQVU7QUFDZDtBQUNBLG9DQUFvQyx1QkFBdUIsRUFBRTtBQUM3RDs7Ozs7Ozs7Ozs7O0FDekNBLG1DOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6Ii5ob3QvbWFpbi42ODAwN2JmZWRiMTEzOTE0YmE2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBjb29raWUtcGFyc2VyXG4gKiBDb3B5cmlnaHQoYykgMjAxNCBUSiBIb2xvd2F5Y2h1a1xuICogQ29weXJpZ2h0KGMpIDIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBjb29raWUgPSByZXF1aXJlKCdjb29raWUnKVxudmFyIHNpZ25hdHVyZSA9IHJlcXVpcmUoJ2Nvb2tpZS1zaWduYXR1cmUnKVxuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gY29va2llUGFyc2VyXG5tb2R1bGUuZXhwb3J0cy5KU09OQ29va2llID0gSlNPTkNvb2tpZVxubW9kdWxlLmV4cG9ydHMuSlNPTkNvb2tpZXMgPSBKU09OQ29va2llc1xubW9kdWxlLmV4cG9ydHMuc2lnbmVkQ29va2llID0gc2lnbmVkQ29va2llXG5tb2R1bGUuZXhwb3J0cy5zaWduZWRDb29raWVzID0gc2lnbmVkQ29va2llc1xuXG4vKipcbiAqIFBhcnNlIENvb2tpZSBoZWFkZXIgYW5kIHBvcHVsYXRlIGByZXEuY29va2llc2BcbiAqIHdpdGggYW4gb2JqZWN0IGtleWVkIGJ5IHRoZSBjb29raWUgbmFtZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8YXJyYXl9IFtzZWNyZXRdIEEgc3RyaW5nIChvciBhcnJheSBvZiBzdHJpbmdzKSByZXByZXNlbnRpbmcgY29va2llIHNpZ25pbmcgc2VjcmV0KHMpLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY29va2llUGFyc2VyIChzZWNyZXQsIG9wdGlvbnMpIHtcbiAgdmFyIHNlY3JldHMgPSAhc2VjcmV0IHx8IEFycmF5LmlzQXJyYXkoc2VjcmV0KVxuICAgID8gKHNlY3JldCB8fCBbXSlcbiAgICA6IFtzZWNyZXRdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvb2tpZVBhcnNlciAocmVxLCByZXMsIG5leHQpIHtcbiAgICBpZiAocmVxLmNvb2tpZXMpIHtcbiAgICAgIHJldHVybiBuZXh0KClcbiAgICB9XG5cbiAgICB2YXIgY29va2llcyA9IHJlcS5oZWFkZXJzLmNvb2tpZVxuXG4gICAgcmVxLnNlY3JldCA9IHNlY3JldHNbMF1cbiAgICByZXEuY29va2llcyA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgICByZXEuc2lnbmVkQ29va2llcyA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICAgIC8vIG5vIGNvb2tpZXNcbiAgICBpZiAoIWNvb2tpZXMpIHtcbiAgICAgIHJldHVybiBuZXh0KClcbiAgICB9XG5cbiAgICByZXEuY29va2llcyA9IGNvb2tpZS5wYXJzZShjb29raWVzLCBvcHRpb25zKVxuXG4gICAgLy8gcGFyc2Ugc2lnbmVkIGNvb2tpZXNcbiAgICBpZiAoc2VjcmV0cy5sZW5ndGggIT09IDApIHtcbiAgICAgIHJlcS5zaWduZWRDb29raWVzID0gc2lnbmVkQ29va2llcyhyZXEuY29va2llcywgc2VjcmV0cylcbiAgICAgIHJlcS5zaWduZWRDb29raWVzID0gSlNPTkNvb2tpZXMocmVxLnNpZ25lZENvb2tpZXMpXG4gICAgfVxuXG4gICAgLy8gcGFyc2UgSlNPTiBjb29raWVzXG4gICAgcmVxLmNvb2tpZXMgPSBKU09OQ29va2llcyhyZXEuY29va2llcylcblxuICAgIG5leHQoKVxuICB9XG59XG5cbi8qKlxuICogUGFyc2UgSlNPTiBjb29raWUgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH0gUGFyc2VkIG9iamVjdCBvciB1bmRlZmluZWQgaWYgbm90IGpzb24gY29va2llXG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gSlNPTkNvb2tpZSAoc3RyKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJyB8fCBzdHIuc3Vic3RyKDAsIDIpICE9PSAnajonKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIuc2xpY2UoMikpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxufVxuXG4vKipcbiAqIFBhcnNlIEpTT04gY29va2llcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gSlNPTkNvb2tpZXMgKG9iaikge1xuICB2YXIgY29va2llcyA9IE9iamVjdC5rZXlzKG9iailcbiAgdmFyIGtleVxuICB2YXIgdmFsXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gY29va2llc1tpXVxuICAgIHZhbCA9IEpTT05Db29raWUob2JqW2tleV0pXG5cbiAgICBpZiAodmFsKSB7XG4gICAgICBvYmpba2V5XSA9IHZhbFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmpcbn1cblxuLyoqXG4gKiBQYXJzZSBhIHNpZ25lZCBjb29raWUgc3RyaW5nLCByZXR1cm4gdGhlIGRlY29kZWQgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBzaWduZWQgY29va2llIHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd8YXJyYXl9IHNlY3JldFxuICogQHJldHVybiB7U3RyaW5nfSBkZWNvZGVkIHZhbHVlXG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gc2lnbmVkQ29va2llIChzdHIsIHNlY3JldCkge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBpZiAoc3RyLnN1YnN0cigwLCAyKSAhPT0gJ3M6Jykge1xuICAgIHJldHVybiBzdHJcbiAgfVxuXG4gIHZhciBzZWNyZXRzID0gIXNlY3JldCB8fCBBcnJheS5pc0FycmF5KHNlY3JldClcbiAgICA/IChzZWNyZXQgfHwgW10pXG4gICAgOiBbc2VjcmV0XVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2VjcmV0cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB2YWwgPSBzaWduYXR1cmUudW5zaWduKHN0ci5zbGljZSgyKSwgc2VjcmV0c1tpXSlcblxuICAgIGlmICh2YWwgIT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdmFsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKlxuICogUGFyc2Ugc2lnbmVkIGNvb2tpZXMsIHJldHVybmluZyBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgZGVjb2RlZCBrZXkvdmFsdWVcbiAqIHBhaXJzLCB3aGlsZSByZW1vdmluZyB0aGUgc2lnbmVkIGtleSBmcm9tIG9iai5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge3N0cmluZ3xhcnJheX0gc2VjcmV0XG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gc2lnbmVkQ29va2llcyAob2JqLCBzZWNyZXQpIHtcbiAgdmFyIGNvb2tpZXMgPSBPYmplY3Qua2V5cyhvYmopXG4gIHZhciBkZWNcbiAgdmFyIGtleVxuICB2YXIgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB2YXIgdmFsXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gY29va2llc1tpXVxuICAgIHZhbCA9IG9ialtrZXldXG4gICAgZGVjID0gc2lnbmVkQ29va2llKHZhbCwgc2VjcmV0KVxuXG4gICAgaWYgKHZhbCAhPT0gZGVjKSB7XG4gICAgICByZXRba2V5XSA9IGRlY1xuICAgICAgZGVsZXRlIG9ialtrZXldXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZG90ZW52ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJkb3RlbnZcIikpO1xudmFyIGV4cHJlc3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZXhwcmVzc1wiKSk7XG52YXIgY29yc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJjb3JzXCIpKTtcbnZhciBoZWxtZXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiaGVsbWV0XCIpKTtcbnZhciByb3V0ZXNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXNcIikpO1xudmFyIGJvZHlfcGFyc2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImJvZHktcGFyc2VyXCIpKTtcbnZhciBjb29raWVfcGFyc2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIikpO1xuZG90ZW52LmNvbmZpZygpO1xuaWYgKCFwcm9jZXNzLmVudi5QT1JUKSB7XG4gICAgcHJvY2Vzcy5leGl0KDEpO1xufVxudmFyIGFwcCA9IGV4cHJlc3NfMS5kZWZhdWx0KCk7XG5hcHAudXNlKGhlbG1ldF8xLmRlZmF1bHQoKSk7XG5hcHAudXNlKGNvcnNfMS5kZWZhdWx0KCkpO1xuYXBwLnVzZShleHByZXNzXzEuZGVmYXVsdC5qc29uKCkpO1xuYXBwLnVzZShib2R5X3BhcnNlcl8xLmRlZmF1bHQuanNvbigpKTtcbmFwcC51c2UoYm9keV9wYXJzZXJfMS5kZWZhdWx0LnVybGVuY29kZWQoe1xuICAgIGV4dGVuZGVkOiB0cnVlLFxufSkpO1xuYXBwLnVzZShjb29raWVfcGFyc2VyXzEuZGVmYXVsdCgpKTtcbmFwcC51c2UoJy8nLCByb3V0ZXNfMS5kZWZhdWx0KTtcbmNvbnNvbGUubG9nKCdoZWxsbyB3b3JsZCcpO1xudmFyIFBPUlQgPSBwYXJzZUZsb2F0KHByb2Nlc3MuZW52LlBPUlQpIHx8IDQ0NDQ7XG52YXIgc2VydmVyID0gYXBwLmxpc3RlbihQT1JULCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJzZXJ2ZXIgcnVubmluZyBvbiBwb3J0OiBcIiArIFBPUlQpO1xufSk7XG5pZiAobW9kdWxlLmhvdCkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlci5jbG9zZSgpOyB9KTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtc2lnbmF0dXJlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=