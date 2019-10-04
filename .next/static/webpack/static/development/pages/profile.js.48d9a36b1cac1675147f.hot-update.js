webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/*! exports provided: authenticate, user, auth, logout, isAuth, withAuthSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticate", function() { return authenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAuth", function() { return isAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuthSync", function() { return withAuthSync; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/dist/next-cookies.browser.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! os */ "./node_modules/os-browserify/browser.js");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");






var _jsxFileName = "/home/john_vincent/Next/nextjs-auth/utils/auth.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;






var authenticate =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(token) {
    var response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.set('token', token, {
              expires: 1
            });
            _context.next = 3;
            return fetch("http://127.0.0.1:3333/v1" + '/a/me', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
              }
            }).then(function (response) {
              return response.json();
            });

          case 3:
            response = _context.sent;
            js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.set('user', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default()(response.data));
            next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/profile');

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function authenticate(_x) {
    return _ref.apply(this, arguments);
  };
}();
var user = function user() {
  if (js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get('user') !== undefined) {
    return JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get('user'));
  }
};
var auth = function auth(ctx) {
  var _nextCookie = next_cookies__WEBPACK_IMPORTED_MODULE_8___default()(ctx),
      token = _nextCookie.token;
  /*
   * If `ctx.req` is available it means we are on the server.
   * Additionally if there's no token it means the user is not logged in.
   */


  if (ctx.req && !token) {
    ctx.res.writeHead(302, {
      Location: '/login'
    });
    ctx.res.end();
  } // We already checked for server. This should only happen on client.


  if (!token) {
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/login');
  }

  return token;
};
var logout = function logout() {
  js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.remove('token');
  js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.remove('user'); // to support logging out from all windows

  window.localStorage.setItem('logout', _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()());
  next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/login');
};
var isAuth = function isAuth() {
  if (js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get('token') == undefined) {
    return false;
  }

  return true;
};
var withAuthSync = function withAuthSync(WrappedComponent) {
  var Wrapper = function Wrapper(props) {
    var syncLogout = function syncLogout(event) {
      if (event.key === 'logout') {
        console.log('logged out from storage!');
        next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/login');
      }
    };

    Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
      window.addEventListener('storage', syncLogout);
      return function () {
        window.removeEventListener('storage', syncLogout);
        window.localStorage.removeItem('logout');
      };
    }, [null]);
    return __jsx(WrappedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }));
  };

  Wrapper.getInitialProps =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(ctx) {
      var token, componentProps;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              token = auth(ctx);
              _context2.t0 = WrappedComponent.getInitialProps;

              if (!_context2.t0) {
                _context2.next = 6;
                break;
              }

              _context2.next = 5;
              return WrappedComponent.getInitialProps(ctx);

            case 5:
              _context2.t0 = _context2.sent;

            case 6:
              componentProps = _context2.t0;
              return _context2.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, componentProps, {
                token: token
              }));

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return Wrapper;
};

/***/ })

})
//# sourceMappingURL=profile.js.48d9a36b1cac1675147f.hot-update.js.map