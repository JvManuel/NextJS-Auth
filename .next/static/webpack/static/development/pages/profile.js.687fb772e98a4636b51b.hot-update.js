webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/dist/next-cookies.browser.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_2__);



var initialState = {
  user: next_cookies__WEBPACK_IMPORTED_MODULE_2___default.a.get('user')
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  // switch (action.type) {
  //     case 'TICK':
  //     return {
  //         ...state,
  //         lastUpdate: action.lastUpdate,
  //         light: !!action.light
  //     }
  //     case 'INCREMENT':
  //     return {
  //         ...state,
  //         count: state.count + 1
  //     }
  //     case 'DECREMENT':
  //     return {
  //         ...state,
  //         count: state.count - 1
  //     }
  //     case 'RESET':
  //     return {
  //         ...state,
  //         count: initialState.count
  //     }
  //     default:
  //     return state
  // }
  return state;
};

var initializeStore = function initializeStore() {
  var preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])()));
};

/***/ })

})
//# sourceMappingURL=profile.js.687fb772e98a4636b51b.hot-update.js.map