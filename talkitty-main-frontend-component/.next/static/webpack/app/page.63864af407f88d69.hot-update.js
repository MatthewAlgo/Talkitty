"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/common/header/header.tsx":
/*!*************************************************!*\
  !*** ./src/components/common/header/header.tsx ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/button/dist/chunk-G5TSEPD3.mjs\");\n/* harmony import */ var _barrel_optimize_names_FiHome_FiLogIn_FiLogOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=FiHome,FiLogIn,FiLogOut!=!react-icons/fi */ \"(app-pages-browser)/./node_modules/react-icons/fi/index.mjs\");\n/* harmony import */ var _context_authcontext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/authcontext */ \"(app-pages-browser)/./src/context/authcontext.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n // Adjust the path as necessary\nconst Header = ()=>{\n    _s();\n    const { isAuthenticated, login, logout } = (0,_context_authcontext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const handleAuthAction = ()=>{\n        if (isAuthenticated) {\n            logout();\n        } else {\n        // Navigate to the \n        }\n    };\n    // Determine if the current page is the login or register page\n    const isAuthPage = [\n        '/auth/login',\n        '/auth/register'\n    ].includes(window.location.pathname);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-gray-800 bg-opacity-75 text-white rounded-lg p-4 m-4 shadow-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto flex justify-between items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-4xl font-bold text-white tracking-wider\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-yellow-300\",\n                            children: \"T\"\n                        }, void 0, false, {\n                            fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/common/header/header.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-green-300\",\n                            children: \"a\"\n                        }, void 0, false, {\n                            fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/common/header/header.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-blue-300\",\n                            children: \"l\"\n                        }, void 0, false, {\n                            fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/common/header/header.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-purple-300\",\n                            children: \"k\"\n                        }, void 0, false, {\n                            fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/common/header/header.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-red-300\",\n                            children: \"i\"\n                        }, void 0, false, {\n                            fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/common/header/header.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-pink-300\",\n                            children: \"t\"\n                        }, void 0, false, {\n                            fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/common/header/header.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-indigo-300\",\n                            children: \"t\"\n                        }, void 0, false, {\n                            fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/common/header/header.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-yellow-300\",\n                            children: \"y\"\n                        }, void 0, false, {\n                            fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/common/header/header.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/common/header/header.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, undefined),\n                isAuthPage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.button_default, {\n                    color: \"primary\",\n                    onClick: ()=>window.location.href = '/',\n                    className: \"ml-4 flex items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiHome_FiLogIn_FiLogOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiHome, {\n                            className: \"mr-2\"\n                        }, void 0, false, {\n                            fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/common/header/header.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 25\n                        }, undefined),\n                        \"Home\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/common/header/header.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 21\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.button_default, {\n                    color: \"primary\",\n                    onClick: handleAuthAction,\n                    className: \"ml-4 flex items-center\",\n                    children: [\n                        isAuthenticated ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiHome_FiLogIn_FiLogOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiLogOut, {\n                            className: \"mr-2\"\n                        }, void 0, false, {\n                            fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/common/header/header.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 44\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiHome_FiLogIn_FiLogOut_react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiLogIn, {\n                            className: \"mr-2\"\n                        }, void 0, false, {\n                            fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/common/header/header.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 76\n                        }, undefined),\n                        isAuthenticated ? 'Logout' : 'Login'\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/common/header/header.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/common/header/header.tsx\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/common/header/header.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Header, \"iU3kWicRtR1Zpx7oxnAjAa6bugI=\", false, function() {\n    return [\n        _context_authcontext__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = Header;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9oZWFkZXIvaGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEI7QUFDaUI7QUFDZ0I7QUFDSixDQUFDLCtCQUErQjtBQUV2RixNQUFNTSxTQUFtQjs7SUFDckIsTUFBTSxFQUFFQyxlQUFlLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFLEdBQUdKLDZEQUFPQTtJQUVsRCxNQUFNSyxtQkFBbUI7UUFDckIsSUFBSUgsaUJBQWlCO1lBQ2pCRTtRQUNKLE9BQU87UUFDSCxtQkFBbUI7UUFDdkI7SUFDSjtJQUVBLDhEQUE4RDtJQUM5RCxNQUFNRSxhQUFhO1FBQ2Y7UUFDQTtLQUNILENBQUNDLFFBQVEsQ0FBQ0MsT0FBT0MsUUFBUSxDQUFDQyxRQUFRO0lBRW5DLHFCQUNJLDhEQUFDQztRQUFPQyxXQUFVO2tCQUNkLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDWCw4REFBQ0U7b0JBQUdGLFdBQVU7O3NDQUNWLDhEQUFDRzs0QkFBS0gsV0FBVTtzQ0FBa0I7Ozs7OztzQ0FDbEMsOERBQUNHOzRCQUFLSCxXQUFVO3NDQUFpQjs7Ozs7O3NDQUNqQyw4REFBQ0c7NEJBQUtILFdBQVU7c0NBQWdCOzs7Ozs7c0NBQ2hDLDhEQUFDRzs0QkFBS0gsV0FBVTtzQ0FBa0I7Ozs7OztzQ0FDbEMsOERBQUNHOzRCQUFLSCxXQUFVO3NDQUFlOzs7Ozs7c0NBQy9CLDhEQUFDRzs0QkFBS0gsV0FBVTtzQ0FBZ0I7Ozs7OztzQ0FDaEMsOERBQUNHOzRCQUFLSCxXQUFVO3NDQUFrQjs7Ozs7O3NDQUNsQyw4REFBQ0c7NEJBQUtILFdBQVU7c0NBQWtCOzs7Ozs7Ozs7Ozs7Z0JBRXJDTiwyQkFDRyw4REFBQ1YsNkRBQU1BO29CQUNIb0IsT0FBTTtvQkFDTkMsU0FBUyxJQUFPVCxPQUFPQyxRQUFRLENBQUNTLElBQUksR0FBRztvQkFDdkNOLFdBQVU7O3NDQUVWLDhEQUFDYixpR0FBTUE7NEJBQUNhLFdBQVU7Ozs7Ozt3QkFBUzs7Ozs7OzhDQUkvQiw4REFBQ2hCLDZEQUFNQTtvQkFDSG9CLE9BQU07b0JBQ05DLFNBQVNaO29CQUNUTyxXQUFVOzt3QkFFVFYsZ0NBQWtCLDhEQUFDSixtR0FBUUE7NEJBQUNjLFdBQVU7Ozs7O3NEQUFZLDhEQUFDZixrR0FBT0E7NEJBQUNlLFdBQVU7Ozs7Ozt3QkFDckVWLGtCQUFrQixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEQ7R0FwRE1EOztRQUN5Q0QseURBQU9BOzs7S0FEaERDO0FBc0ROLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL2hlYWRlci9oZWFkZXIudHN4PzA3NDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BuZXh0dWktb3JnL3JlYWN0JztcbmltcG9ydCB7IEZpTG9nSW4sIEZpTG9nT3V0LCBGaUhvbWUgfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dC9hdXRoY29udGV4dCc7IC8vIEFkanVzdCB0aGUgcGF0aCBhcyBuZWNlc3NhcnlcblxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCwgbG9naW4sIGxvZ291dCB9ID0gdXNlQXV0aCgpO1xuXG4gICAgY29uc3QgaGFuZGxlQXV0aEFjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKGlzQXV0aGVudGljYXRlZCkge1xuICAgICAgICAgICAgbG9nb3V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBOYXZpZ2F0ZSB0byB0aGUgXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBjdXJyZW50IHBhZ2UgaXMgdGhlIGxvZ2luIG9yIHJlZ2lzdGVyIHBhZ2VcbiAgICBjb25zdCBpc0F1dGhQYWdlID0gW1xuICAgICAgICAnL2F1dGgvbG9naW4nLFxuICAgICAgICAnL2F1dGgvcmVnaXN0ZXInXG4gICAgXS5pbmNsdWRlcyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCBiZy1vcGFjaXR5LTc1IHRleHQtd2hpdGUgcm91bmRlZC1sZyBwLTQgbS00IHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtd2hpdGUgdHJhY2tpbmctd2lkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctMzAwXCI+VDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi0zMDBcIj5hPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtMzAwXCI+bDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wdXJwbGUtMzAwXCI+azwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtMzAwXCI+aTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1waW5rLTMwMFwiPnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTMwMFwiPnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteWVsbG93LTMwMFwiPnk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICB7aXNBdXRoUGFnZSA/IChcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC00IGZsZXggaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpSG9tZSBjbGFzc05hbWU9XCJtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUF1dGhBY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC00IGZsZXggaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2lzQXV0aGVudGljYXRlZCA/IDxGaUxvZ091dCBjbGFzc05hbWU9XCJtci0yXCIgLz4gOiA8RmlMb2dJbiBjbGFzc05hbWU9XCJtci0yXCIgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNBdXRoZW50aWNhdGVkID8gJ0xvZ291dCcgOiAnTG9naW4nfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJGaUxvZ0luIiwiRmlMb2dPdXQiLCJGaUhvbWUiLCJ1c2VBdXRoIiwiSGVhZGVyIiwiaXNBdXRoZW50aWNhdGVkIiwibG9naW4iLCJsb2dvdXQiLCJoYW5kbGVBdXRoQWN0aW9uIiwiaXNBdXRoUGFnZSIsImluY2x1ZGVzIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwic3BhbiIsImNvbG9yIiwib25DbGljayIsImhyZWYiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/common/header/header.tsx\n"));

/***/ })

});