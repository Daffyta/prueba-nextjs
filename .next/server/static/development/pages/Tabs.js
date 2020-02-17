module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/img/notifications.svg":
/*!**************************************!*\
  !*** ./assets/img/notifications.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDE2IDIwIj4KICAgIDxwYXRoIGlkPSJwcmVmaXhfX2Jhc2VsaW5lLW5vdGlmaWNhdGlvbnMtMjRweCIgZD0iTTEyIDIyLjVhMi4wMzIgMi4wMzIgMCAwMDItMi4wNTFoLTRhMi4wMjYgMi4wMjYgMCAwMDIgMi4wNTF6bTYtNi4xNTR2LTUuMTI4YzAtMy4xNDktMS42NC01Ljc4NS00LjUtNi40ODJ2LS43YTEuNSAxLjUgMCAxMC0zIDB2LjdDNy42MyA1LjQzMyA2IDguMDU5IDYgMTEuMjE4djUuMTI4TDQgMTguNHYxLjAyNmgxNlYxOC40eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQgLTIuNSkiIHN0eWxlPSJmaWxsOiMxNzVkOGQiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./assets/img/prancheta.png":
/*!**********************************!*\
  !*** ./assets/img/prancheta.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./assets/img/settings.svg":
/*!*********************************!*\
  !*** ./assets/img/settings.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIGhlaWdodD0iNTBweCIgc3R5bGU9ImZpbGw6IzE3NWQ4ZCI+ICAgIDxwYXRoIGQ9Ik00Ny4xNiwyMS4yMjFsLTUuOTEtMC45NjZjLTAuMzQ2LTEuMTg2LTAuODE5LTIuMzI2LTEuNDExLTMuNDA1bDMuNDUtNC45MTdjMC4yNzktMC4zOTcsMC4yMzEtMC45MzgtMC4xMTItMS4yODIgbC0zLjg4OS0zLjg4N2MtMC4zNDctMC4zNDYtMC44OTMtMC4zOTEtMS4yOTEtMC4xMDRsLTQuODQzLDMuNDgxYy0xLjA4OS0wLjYwMi0yLjIzOS0xLjA4LTMuNDMyLTEuNDI3bC0xLjAzMS01Ljg4NiBDMjguNjA3LDIuMzUsMjguMTkyLDIsMjcuNzA2LDJoLTUuNWMtMC40OSwwLTAuOTA4LDAuMzU1LTAuOTg3LDAuODM5bC0wLjk1Niw1Ljg1NGMtMS4yLDAuMzQ1LTIuMzUyLDAuODE4LTMuNDM3LDEuNDEybC00LjgzLTMuNDUgYy0wLjM5OS0wLjI4NS0wLjk0Mi0wLjIzOS0xLjI4OSwwLjEwNkw2LjgyLDEwLjY0OGMtMC4zNDMsMC4zNDMtMC4zOTEsMC44ODMtMC4xMTIsMS4yOGwzLjM5OSw0Ljg2MyBjLTAuNjA1LDEuMDk1LTEuMDg3LDIuMjU0LTEuNDM4LDMuNDZsLTUuODMxLDAuOTcxYy0wLjQ4MiwwLjA4LTAuODM2LDAuNDk4LTAuODM2LDAuOTg2djUuNWMwLDAuNDg1LDAuMzQ4LDAuOSwwLjgyNSwwLjk4NSBsNS44MzEsMS4wMzRjMC4zNDksMS4yMDMsMC44MzEsMi4zNjIsMS40MzgsMy40NmwtMy40NDEsNC44MTNjLTAuMjg0LDAuMzk3LTAuMjM5LDAuOTQyLDAuMTA2LDEuMjg5bDMuODg4LDMuODkxIGMwLjM0MywwLjM0MywwLjg4NCwwLjM5MSwxLjI4MSwwLjExMmw0Ljg3LTMuNDExYzEuMDkzLDAuNjAxLDIuMjQ4LDEuMDc4LDMuNDQ1LDEuNDI0bDAuOTc2LDUuODYxQzIxLjMsNDcuNjQ3LDIxLjcxNyw0OCwyMi4yMDYsNDggaDUuNWMwLjQ4NSwwLDAuOS0wLjM0OCwwLjk4NC0wLjgyNWwxLjA0NS01Ljg5YzEuMTk5LTAuMzUzLDIuMzQ4LTAuODMzLDMuNDMtMS40MzVsNC45MDUsMy40NDEgYzAuMzk4LDAuMjgxLDAuOTM4LDAuMjMyLDEuMjgyLTAuMTExbDMuODg4LTMuODkxYzAuMzQ2LTAuMzQ3LDAuMzkxLTAuODk0LDAuMTA0LTEuMjkybC0zLjQ5OC00Ljg1NyBjMC41OTMtMS4wOCwxLjA2NC0yLjIyMiwxLjQwNy0zLjQwOGw1LjkxOC0xLjAzOWMwLjQ3OS0wLjA4NCwwLjgyNy0wLjUsMC44MjctMC45ODV2LTUuNUM0Ny45OTksMjEuNzE4LDQ3LjY0NCwyMS4zLDQ3LjE2LDIxLjIyMXogTTI1LDMyYy0zLjg2NiwwLTctMy4xMzQtNy03YzAtMy44NjYsMy4xMzQtNyw3LTdzNywzLjEzNCw3LDdDMzIsMjguODY2LDI4Ljg2NiwzMiwyNSwzMnoiLz48L3N2Zz4=");

/***/ }),

/***/ "./assets/img/user.png":
/*!*****************************!*\
  !*** ./assets/img/user.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./components/Contenido/Formulario.js":
/*!********************************************!*\
  !*** ./components/Contenido/Formulario.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/daffyta/Public/contadores/components/Contenido/Formulario.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Formulario = props => {
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "date",
    name: "date",
    id: "exampleDate",
    placeholder: "date placeholder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "search",
    name: "search",
    id: "exampleSearch",
    placeholder: "Proveedor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Formulario);

/***/ }),

/***/ "./components/Contenido/Tabla.js":
/*!***************************************!*\
  !*** ./components/Contenido/Tabla.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/daffyta/Public/contadores/components/Contenido/Tabla.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Tabla = props => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    striped: true,
    responsive: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "#"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Emisi\xF3n-Venc."), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Proveedor"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Concepto"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Monto"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Descargas"))), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("th", {
    scope: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "1"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "JUN 19 - JUL 18"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Sociedad Integra Cartomex S.A. de C.V."), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Gastos general"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "$ 4444,4444,4444.00 MXN"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Descarga")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("th", {
    scope: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "2"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "JUN 19 - JUL 18"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Sociedad Integra Cartomex S.A. de C.V."), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Gastos general"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "$ 4444,4444,4444.00 MXN"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Descarga")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("th", {
    scope: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "3"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "JUN 19 - JUL 18"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Sociedad Integra Cartomex S.A. de C.V."), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Gastos general"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "$ 4444,4444,4444.00 MXN"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Descarga")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("th", {
    scope: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "4"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "JUN 19 - JUL 18"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Sociedad de Abogados S.A. de C.V."), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Gastos general"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "$ 4444,4444,4444.00 MXN"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "Descarga")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("th", {
    scope: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "5"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "JUN 19 - JUL 18"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Sociedad de Abogados S.A. de C.V."), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "Gastos general"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "$ 4444,4444,4444.00 MXN"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "Descarga")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("th", {
    scope: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "6"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "JUN 19 - JUL 18"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "Sociedad de Abogados S.A. de C.V."), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "Gastos general"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "$ 4444,4444,4444.00 MXN"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Descarga")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx("th", {
    scope: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "7"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "JUN 19 - JUL 18"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "Sociedad de Abogados S.A. de C.V."), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "Gastos general"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "$ 4444,4444,4444.00 MXN"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "Descarga")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("th", {
    scope: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "8"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "JUN 19 - JUL 18"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "Sociedad de Abogados S.A. de C.V."), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, "Gastos general"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, "$ 4444,4444,4444.00 MXN"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, "Descarga")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Pagination"], {
    size: "sm",
    "aria-label": "Page navigation example",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationLink"], {
    previous: true,
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationItem"], {
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationLink"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "1")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationLink"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, "2")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationLink"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, "3")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationLink"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, "4")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationLink"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "5")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationLink"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, "6")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationLink"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, "7")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationLink"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "8")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationLink"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, "9")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PaginationLink"], {
    next: true,
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Tabla);

/***/ }),

/***/ "./components/Contenido/Tarjetas.js":
/*!******************************************!*\
  !*** ./components/Contenido/Tarjetas.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_img_prancheta_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/img/prancheta.png */ "./assets/img/prancheta.png");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/daffyta/Public/contadores/components/Contenido/Tarjetas.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Tarjetas = props => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    body: true,
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("img", {
    src: _assets_img_prancheta_png__WEBPACK_IMPORTED_MODULE_0__["default"],
    alt: "multitud",
    width: "80px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Pymes registradas en Visor. Lorem ipsum dolor sit amet.")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    body: true,
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("img", {
    src: _assets_img_prancheta_png__WEBPACK_IMPORTED_MODULE_0__["default"],
    alt: "multitud",
    width: "80px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Pymes registradas en Visor. Lorem ipsum dolor sit amet.")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    body: true,
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("img", {
    src: _assets_img_prancheta_png__WEBPACK_IMPORTED_MODULE_0__["default"],
    alt: "multitud",
    width: "80px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Pymes registradas en Visor. Lorem ipsum dolor sit amet.")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    body: true,
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("img", {
    src: _assets_img_prancheta_png__WEBPACK_IMPORTED_MODULE_0__["default"],
    alt: "multitud",
    width: "80px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Pymes registradas en Visor. Lorem ipsum dolor sit amet.")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    body: true,
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("img", {
    src: _assets_img_prancheta_png__WEBPACK_IMPORTED_MODULE_0__["default"],
    alt: "multitud",
    width: "80px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Pymes registradas en Visor. Lorem ipsum dolor sit amet.")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    body: true,
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("img", {
    src: _assets_img_prancheta_png__WEBPACK_IMPORTED_MODULE_0__["default"],
    alt: "multitud",
    width: "80px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Pymes registradas en Visor. Lorem ipsum dolor sit amet.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Tarjetas);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.js */ "./components/Sidebar.js");
/* harmony import */ var _Navegation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navegation.js */ "./components/Navegation.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/daffyta/Public/contadores/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Header() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_Sidebar_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_Navegation_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./components/Navegation.js":
/*!**********************************!*\
  !*** ./components/Navegation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_img_notifications_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/notifications.svg */ "./assets/img/notifications.svg");
/* harmony import */ var _assets_img_settings_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/settings.svg */ "./assets/img/settings.svg");
/* harmony import */ var _scss_components_navegation_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/components/navegation.scss */ "./scss/components/navegation.scss");
/* harmony import */ var _scss_components_navegation_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_components_navegation_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/daffyta/Public/contadores/components/Navegation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







const Navegation = props => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);

  const toggle = () => setIsOpen(!isOpen);

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    expand: "md",
    light: true,
    className: "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("div", {
    className: "d-flex align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavbarBrand"], {
    href: "/",
    className: "navbar-brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Dashboard")), __jsx("div", {
    className: "d-flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("img", {
    src: _assets_img_notifications_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
    alt: "notifications",
    width: "21px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("img", {
    src: _assets_img_settings_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "settings",
    width: "25px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavbarToggler"], {
    onClick: toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    className: "mr-auto",
    navbar: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["UncontrolledDropdown"], {
    nav: true,
    inNavbar: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "Dashboard"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/Tabs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Tabs"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navegation);

/***/ }),

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_img_user_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/user.png */ "./assets/img/user.png");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/daffyta/Public/contadores/components/Sidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Sidebar = props => {
  return __jsx("div", {
    id: "sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("img", {
    src: _assets_img_user_png__WEBPACK_IMPORTED_MODULE_0__["default"],
    alt: "user",
    width: "80%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "LOREM IPSUM"), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    vertical: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    href: "/",
    as: `${process.env.ASSET_PREFIX}/`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Dashboard")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    href: "/Tabs",
    as: `${process.env.ASSET_PREFIX}/Tabs`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Tabs")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Another Link")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Another Link")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Another Link"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/Tabs.js":
/*!***********************!*\
  !*** ./pages/Tabs.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_Contenido_Tabla_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Contenido/Tabla.js */ "./components/Contenido/Tabla.js");
/* harmony import */ var _components_Contenido_Formulario_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Contenido/Formulario.js */ "./components/Contenido/Formulario.js");
/* harmony import */ var _components_Contenido_Tarjetas_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Contenido/Tarjetas.js */ "./components/Contenido/Tarjetas.js");
/* harmony import */ var _components_Sidebar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Sidebar.js */ "./components/Sidebar.js");
/* harmony import */ var _components_Navegation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Navegation.js */ "./components/Navegation.js");
var _jsxFileName = "/home/daffyta/Public/contadores/pages/Tabs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Tabs = props => {
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return __jsx("div", {
    className: "container-fluid",
    id: "menu-tabs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "3",
    className: "pad-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_components_Sidebar_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(_components_Navegation_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    tabs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      active: activeTab === '1'
    }),
    onClick: () => {
      toggle('1');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Tabla")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      active: activeTab === '2'
    }),
    onClick: () => {
      toggle('2');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Cards"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabContent"], {
    activeTab: activeTab,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(_components_Contenido_Formulario_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), __jsx(_components_Contenido_Tabla_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx(_components_Contenido_Tarjetas_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./scss/components/navegation.scss":
/*!*****************************************!*\
  !*** ./scss/components/navegation.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"hidden-mobile": "In3zoLDN6v-mEDh_titFR",
	"hidden-desktop": "_3dUygnqoI8tG8mQXE7K_j3",
	"navbar": "_2XTlZHQert4iN0JFqJNUnH",
	"navbar-brand": "_36S2bsbZy_n7VfJOom2OTH",
	"navbar-toggler": "_3GGv9hOl1DT20HvEsrr1Jy"
};

/***/ }),

/***/ 5:
/*!*****************************!*\
  !*** multi ./pages/Tabs.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/daffyta/Public/contadores/pages/Tabs.js */"./pages/Tabs.js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=Tabs.js.map