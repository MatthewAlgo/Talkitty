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

/***/ "(app-pages-browser)/./src/components/ui/buttons/button-with-icon.tsx":
/*!********************************************************!*\
  !*** ./src/components/ui/buttons/button-with-icon.tsx ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ButtonWithIcon)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/button/dist/chunk-G5TSEPD3.mjs\");\n\n\nfunction ButtonWithIcon(param) {\n    let { icon, onClick, children, ...props } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.button_default, {\n        color: \"primary\",\n        className: \"flex items-center gap-2 border-4 border-indigo-250/75\",\n        ...props,\n        style: {\n            backgroundColor: 'var(--geist-cyan)',\n            color: 'var(--geist-foreground)',\n            fontFamily: 'var(--font-geist-sans)',\n            fontWeight: 700,\n            fontSize: '1rem',\n            padding: '0.5rem 1rem',\n            borderRadius: '0.5rem',\n            cursor: 'pointer',\n            transition: 'background-color 0.2s, color 0.2s',\n            overflow: 'hidden',\n            position: 'relative'\n        },\n        onPress: onClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginRight: '0.5rem',\n                    display: 'flex',\n                    flexDirection: 'column',\n                    justifyContent: 'center'\n                },\n                children: Array.isArray(icon) ? icon.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: 'flex'\n                        },\n                        children: item\n                    }, index, false, {\n                        fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/ui/buttons/button-with-icon.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 27\n                    }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        display: 'flex'\n                    },\n                    children: icon\n                }, void 0, false, {\n                    fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/ui/buttons/button-with-icon.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 27\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/ui/buttons/button-with-icon.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/ui/buttons/button-with-icon.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_c = ButtonWithIcon;\nvar _c;\n$RefreshReg$(_c, \"ButtonWithIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL2J1dHRvbnMvYnV0dG9uLXdpdGgtaWNvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQztBQVU1QixTQUFTQyxlQUFlLEtBS2pCO1FBTGlCLEVBQ25DQyxJQUFJLEVBQ0pDLE9BQU8sRUFDUEMsUUFBUSxFQUNSLEdBQUdDLE9BQ2UsR0FMaUI7SUFNbkMscUJBQ0ksOERBQUNMLDZEQUFNQTtRQUNITSxPQUFNO1FBQ05DLFdBQVU7UUFDVCxHQUFHRixLQUFLO1FBQ1RHLE9BQU87WUFDSEMsaUJBQWlCO1lBQ2pCSCxPQUFPO1lBQ1BJLFlBQVk7WUFDWkMsWUFBWTtZQUNaQyxVQUFVO1lBQ1ZDLFNBQVM7WUFDVEMsY0FBYztZQUNkQyxRQUFRO1lBQ1JDLFlBQVk7WUFDWkMsVUFBVTtZQUNWQyxVQUFVO1FBQ2Q7UUFDQUMsU0FBU2hCOzswQkFFVCw4REFBQ2lCO2dCQUNHWixPQUFPO29CQUNIYSxhQUFhO29CQUNiQyxTQUFTO29CQUNUQyxlQUFlO29CQUNmQyxnQkFBZ0I7Z0JBQ3BCOzBCQUVDQyxNQUFNQyxPQUFPLENBQUN4QixRQUNUQSxLQUFLeUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNaLDhEQUFDVDt3QkFBZ0JaLE9BQU87NEJBQUVjLFNBQVM7d0JBQU87a0NBQ3JDTTt1QkFES0M7Ozs7OENBS1YsOERBQUNUO29CQUFJWixPQUFPO3dCQUFFYyxTQUFTO29CQUFPOzhCQUN6QnBCOzs7Ozs7Ozs7OztZQUlsQkU7Ozs7Ozs7QUFHYjtLQWpEd0JIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdWkvYnV0dG9ucy9idXR0b24td2l0aC1pY29uLnRzeD81MzE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BuZXh0dWktb3JnL3JlYWN0JztcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIEJ1dHRvbldpdGhJY29uUHJvcHMge1xuICAgIGljb246IFJlYWN0Tm9kZTtcbiAgICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgICBvbkNsaWNrPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXI8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xuICAgIFtrZXk6IHN0cmluZ106IHVua25vd247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbldpdGhJY29uKHtcbiAgICBpY29uLFxuICAgIG9uQ2xpY2ssXG4gICAgY2hpbGRyZW4sXG4gICAgLi4ucHJvcHNcbn06IEJ1dHRvbldpdGhJY29uUHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYm9yZGVyLTQgYm9yZGVyLWluZGlnby0yNTAvNzVcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd2YXIoLS1nZWlzdC1jeWFuKScsXG4gICAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1nZWlzdC1mb3JlZ3JvdW5kKScsXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ3ZhcigtLWZvbnQtZ2Vpc3Qtc2FucyknLFxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzFyZW0nLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwLjVyZW0gMXJlbScsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMC41cmVtJyxcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZC1jb2xvciAwLjJzLCBjb2xvciAwLjJzJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25QcmVzcz17b25DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMC41cmVtJyxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge0FycmF5LmlzQXJyYXkoaWNvbilcbiAgICAgICAgICAgICAgICAgICAgPyBpY29uLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJCdXR0b25XaXRoSWNvbiIsImljb24iLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJwcm9wcyIsImNvbG9yIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImN1cnNvciIsInRyYW5zaXRpb24iLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwib25QcmVzcyIsImRpdiIsIm1hcmdpblJpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/buttons/button-with-icon.tsx\n"));

/***/ })

});