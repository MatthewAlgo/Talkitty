"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/register/page",{

/***/ "(app-pages-browser)/./src/components/ui/buttons/button-with-icon.tsx":
/*!********************************************************!*\
  !*** ./src/components/ui/buttons/button-with-icon.tsx ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ButtonWithIcon)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/button/dist/chunk-G5TSEPD3.mjs\");\n\n\nfunction ButtonWithIcon(param) {\n    let { icon, children, ...props } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.button_default, {\n        color: \"primary\",\n        className: \"flex items-center gap-2 border-4 border-indigo-250/75\",\n        ...props,\n        style: {\n            backgroundColor: 'var(--geist-cyan)',\n            color: 'var(--geist-foreground)',\n            fontFamily: 'var(--font-geist-sans)',\n            fontWeight: 700,\n            fontSize: '1rem',\n            padding: '0.5rem 1rem',\n            borderRadius: '0.5rem',\n            cursor: 'pointer',\n            transition: 'background-color 0.2s, color 0.2s',\n            overflow: 'hidden',\n            position: 'relative'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginRight: '0.5rem',\n                    display: 'flex',\n                    flexDirection: 'column',\n                    justifyContent: 'center'\n                },\n                children: Array.isArray(icon) ? icon.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: 'flex'\n                        },\n                        children: item\n                    }, index, false, {\n                        fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/ui/buttons/button-with-icon.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 27\n                    }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        display: 'flex'\n                    },\n                    children: icon\n                }, void 0, false, {\n                    fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/ui/buttons/button-with-icon.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 27\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/ui/buttons/button-with-icon.tsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/home/matthewalgo/Projects/Talkitty/talkitty-main-frontend-component/src/components/ui/buttons/button-with-icon.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_c = ButtonWithIcon;\nvar _c;\n$RefreshReg$(_c, \"ButtonWithIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL2J1dHRvbnMvYnV0dG9uLXdpdGgtaWNvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQztBQVM1QixTQUFTQyxlQUFlLEtBSWpCO1FBSmlCLEVBQ25DQyxJQUFJLEVBQ0pDLFFBQVEsRUFDUixHQUFHQyxPQUNlLEdBSmlCO0lBS25DLHFCQUNJLDhEQUFDSiw2REFBTUE7UUFDSEssT0FBTTtRQUNOQyxXQUFVO1FBQ1QsR0FBR0YsS0FBSztRQUNURyxPQUFPO1lBQ0hDLGlCQUFpQjtZQUNqQkgsT0FBTztZQUNQSSxZQUFZO1lBQ1pDLFlBQVk7WUFDWkMsVUFBVTtZQUNWQyxTQUFTO1lBQ1RDLGNBQWM7WUFDZEMsUUFBUTtZQUNSQyxZQUFZO1lBQ1pDLFVBQVU7WUFDVkMsVUFBVTtRQUNkOzswQkFFQSw4REFBQ0M7Z0JBQ0dYLE9BQU87b0JBQ0hZLGFBQWE7b0JBQ2JDLFNBQVM7b0JBQ1RDLGVBQWU7b0JBQ2ZDLGdCQUFnQjtnQkFDcEI7MEJBRUNDLE1BQU1DLE9BQU8sQ0FBQ3RCLFFBQ1RBLEtBQUt1QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ1osOERBQUNUO3dCQUFnQlgsT0FBTzs0QkFBRWEsU0FBUzt3QkFBTztrQ0FDckNNO3VCQURLQzs7Ozs4Q0FLViw4REFBQ1Q7b0JBQUlYLE9BQU87d0JBQUVhLFNBQVM7b0JBQU87OEJBQ3pCbEI7Ozs7Ozs7Ozs7O1lBSWxCQzs7Ozs7OztBQUdiO0tBL0N3QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91aS9idXR0b25zL2J1dHRvbi13aXRoLWljb24udHN4PzUzMTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG5leHR1aS1vcmcvcmVhY3QnO1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgQnV0dG9uV2l0aEljb25Qcm9wcyB7XG4gICAgaWNvbjogUmVhY3ROb2RlO1xuICAgIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAgIFtrZXk6IHN0cmluZ106IHVua25vd247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbldpdGhJY29uKHtcbiAgICBpY29uLFxuICAgIGNoaWxkcmVuLFxuICAgIC4uLnByb3BzXG59OiBCdXR0b25XaXRoSWNvblByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGJvcmRlci00IGJvcmRlci1pbmRpZ28tMjUwLzc1XCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndmFyKC0tZ2Vpc3QtY3lhbiknLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tZ2Vpc3QtZm9yZWdyb3VuZCknLFxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICd2YXIoLS1mb250LWdlaXN0LXNhbnMpJyxcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMC41cmVtIDFyZW0nLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzAuNXJlbScsXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgMC4ycywgY29sb3IgMC4ycycsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMC41cmVtJyxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge0FycmF5LmlzQXJyYXkoaWNvbilcbiAgICAgICAgICAgICAgICAgICAgPyBpY29uLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJCdXR0b25XaXRoSWNvbiIsImljb24iLCJjaGlsZHJlbiIsInByb3BzIiwiY29sb3IiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJkaXYiLCJtYXJnaW5SaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/buttons/button-with-icon.tsx\n"));

/***/ })

});