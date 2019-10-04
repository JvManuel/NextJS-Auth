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


var initialState = {
  lastUpdate: 0,
  light: false,
  count: 0
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
//# sourceMappingURL=profile.js.74c5ed86ee77091bb0d9.hot-update.js.map