"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/login/page",{

/***/ "(app-pages-browser)/./src/components/ui/forms/login-form.tsx":
/*!************************************************!*\
  !*** ./src/components/ui/forms/login-form.tsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoginForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _cards_input_field_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cards/input-field-material */ \"(app-pages-browser)/./src/components/ui/cards/input-field-material.tsx\");\n/* harmony import */ var _buttons_button_with_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buttons/button-with-icon */ \"(app-pages-browser)/./src/components/ui/buttons/button-with-icon.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction LoginForm() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    function handleSubmit(event) {\n        event.preventDefault();\n        console.log(\"Form submitted\", {\n            email,\n            password\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen p-8 sm:p-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-md p-8 space-y-8 rounded-lg shadow-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-bold text-center\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/ui/forms/login-form.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"mt-8 space-y-6\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cards_input_field_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            label: \"Email\",\n                            placeholder: \"Email\",\n                            type: \"email\",\n                            value: email,\n                            onChange: (e)=>setEmail(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/ui/forms/login-form.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cards_input_field_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            label: \"Password\",\n                            placeholder: \"Password\",\n                            type: \"password\",\n                            value: password,\n                            onChange: (e)=>setPassword(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/ui/forms/login-form.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-6 flex-wrap items-center justify-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_buttons_button_with_icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    src: \"/images/github-mark-white.png\",\n                                    alt: \"GitHub Logo\",\n                                    width: 16,\n                                    height: 16,\n                                    onClick: handleSubmit\n                                }, void 0, false, {\n                                    fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/ui/forms/login-form.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 47\n                                }, void 0),\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/ui/forms/login-form.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/ui/forms/login-form.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/ui/forms/login-form.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                    className: \"row-start-3 flex gap-6 flex-wrap items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        href: \"/auth/register\",\n                        className: \"bg-gray-700 text-white px-4 py-2 rounded hover:bg-black transition duration-300 ease-in-out transform hover:scale-105\",\n                        children: \"Don't have an account? Register\"\n                    }, void 0, false, {\n                        fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/ui/forms/login-form.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/ui/forms/login-form.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/ui/forms/login-form.tsx\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/ui/forms/login-form.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_s(LoginForm, \"TSZhDBNy8CmbxXgprY/vvMmTG1Q=\");\n_c = LoginForm;\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL2Zvcm1zL2xvZ2luLWZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDaUM7QUFDOEI7QUFDTjtBQUMxQjtBQUNGO0FBRWQsU0FBU0s7O0lBQ3BCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFFekMsU0FBU1UsYUFBYUMsS0FBc0I7UUFDeENBLE1BQU1DLGNBQWM7UUFDcEJDLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0I7WUFBRVI7WUFBT0U7UUFBUztJQUNwRDtJQUVBLHFCQUNJLDhEQUFDTztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQWlDOzs7Ozs7OEJBQy9DLDhEQUFDRTtvQkFBS0YsV0FBVTtvQkFBaUJHLFVBQVVUOztzQ0FDdkMsOERBQUNULG1FQUFrQkE7NEJBQ2ZtQixPQUFNOzRCQUNOQyxhQUFZOzRCQUNaQyxNQUFLOzRCQUNMQyxPQUFPakI7NEJBQ1BrQixVQUFVLENBQUNDLElBQU1sQixTQUFTa0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7c0NBRTVDLDhEQUFDdEIsbUVBQWtCQTs0QkFDZm1CLE9BQU07NEJBQ05DLGFBQVk7NEJBQ1pDLE1BQUs7NEJBQ0xDLE9BQU9mOzRCQUNQZ0IsVUFBVSxDQUFDQyxJQUFNaEIsWUFBWWdCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O3NDQUUvQyw4REFBQ1I7NEJBQUlDLFdBQVU7c0NBQ1gsNEVBQUNkLGlFQUFjQTtnQ0FBQ3lCLG9CQUFNLDhEQUFDeEIsa0RBQUtBO29DQUFDeUIsS0FBSTtvQ0FBZ0NDLEtBQUk7b0NBQWNDLE9BQU87b0NBQUlDLFFBQVE7b0NBQUlDLFNBQVN0Qjs7Ozs7OzBDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSzVJLDhEQUFDdUI7b0JBQU9qQixXQUFVOzhCQUNkLDRFQUFDWixpREFBSUE7d0JBQUM4QixNQUFLO3dCQUFpQmxCLFdBQVU7a0NBQXdIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xMO0dBMUN3Qlg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91aS9mb3Jtcy9sb2dpbi1mb3JtLnRzeD9jMzM1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IElucHV0RmllbGRNYXRlcmlhbCBmcm9tICcuLi9jYXJkcy9pbnB1dC1maWVsZC1tYXRlcmlhbCc7XG5pbXBvcnQgQnV0dG9uV2l0aEljb24gZnJvbSAnLi4vYnV0dG9ucy9idXR0b24td2l0aC1pY29uJztcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkZvcm0oKSB7XG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZvcm0gc3VibWl0dGVkXCIsIHsgZW1haWwsIHBhc3N3b3JkIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIHAtOCBzbTpwLTIwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZCBwLTggc3BhY2UteS04IHJvdW5kZWQtbGcgc2hhZG93LW1kXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiPkxvZ2luPC9oMj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtdC04IHNwYWNlLXktNlwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRGaWVsZE1hdGVyaWFsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRGaWVsZE1hdGVyaWFsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtNiBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25XaXRoSWNvbiBpY29uPXs8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9naXRodWItbWFyay13aGl0ZS5wbmdcIiBhbHQ9XCJHaXRIdWIgTG9nb1wiIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gb25DbGljaz17aGFuZGxlU3VibWl0fS8+fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25XaXRoSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwicm93LXN0YXJ0LTMgZmxleCBnYXAtNiBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aC9yZWdpc3RlclwiIGNsYXNzTmFtZT1cImJnLWdyYXktNzAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQgaG92ZXI6YmctYmxhY2sgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRG9uJmFwb3M7dCBoYXZlIGFuIGFjY291bnQ/IFJlZ2lzdGVyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW5wdXRGaWVsZE1hdGVyaWFsIiwiQnV0dG9uV2l0aEljb24iLCJJbWFnZSIsIkxpbmsiLCJMb2dpbkZvcm0iLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaWNvbiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwib25DbGljayIsImZvb3RlciIsImhyZWYiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/forms/login-form.tsx\n"));

/***/ })

});