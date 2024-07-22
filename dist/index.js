/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("token-ui", [], factory);
	else if(typeof exports === 'object')
		exports["token-ui"] = factory();
	else
		root["token-ui"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Button.tsx":
/*!***********************************!*\
  !*** ./src/components/Button.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Button = (props) => {\n    const button = document.createElement('button');\n    if (props.class)\n        button.className = props.class;\n    if (props.id)\n        button.id = props.id;\n    if (props.name)\n        button.name = props.name;\n    if (props.title)\n        button.title = props.title;\n    if (props.formnovalidate)\n        button.formNoValidate = props.formnovalidate;\n    if (props.formaction)\n        button.formAction = props.formaction;\n    if (props.formtarget)\n        button.formTarget = props.formtarget;\n    if (props.style)\n        button.style.cssText = props.style;\n    if (props.autofocus)\n        button.autofocus = props.autofocus;\n    if (props.disabled)\n        button.disabled = props.disabled;\n    if (props.type)\n        button.type = props.type;\n    if (props.value)\n        button.value = props.value;\n    return button;\n};\nexports[\"default\"] = Button;\n\n\n//# sourceURL=webpack://token-ui/./src/components/Button.tsx?");

/***/ }),

/***/ "./src/components/Inputs.tsx":
/*!***********************************!*\
  !*** ./src/components/Inputs.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Input = (props) => {\n    const input = document.createElement('input');\n    if (props.type)\n        input.type = props.type;\n    if (props.name)\n        input.name = props.name;\n    if (props.value !== undefined)\n        input.value = String(props.value); // Ensure value is a string\n    if (props.id)\n        input.id = props.id;\n    if (props.class)\n        input.className = props.class;\n    if (props.style)\n        input.style.cssText = props.style;\n    if (props.title)\n        input.title = props.title;\n    if (props.disabled)\n        input.disabled = props.disabled;\n    if (props.readonly)\n        input.readOnly = props.readonly;\n    if (props.placeholder)\n        input.placeholder = props.placeholder;\n    if (props.maxlength)\n        input.maxLength = props.maxlength;\n    if (props.minlength)\n        input.minLength = props.minlength;\n    if (props.size)\n        input.size = props.size;\n    if (props.autocomplete)\n        input.autocomplete = props.autocomplete;\n    if (props.required)\n        input.required = props.required;\n    if (props.pattern)\n        input.pattern = props.pattern;\n    if (props.min !== undefined)\n        input.min = String(props.min); // Ensure min is a string\n    if (props.max !== undefined)\n        input.max = String(props.max); // Ensure max is a string\n    if (props.step !== undefined)\n        input.step = String(props.step);\n    if (props.accept)\n        input.accept = props.accept;\n    if (props.formaction)\n        input.formAction = props.formaction;\n    if (props.formenctype)\n        input.formEnctype = props.formenctype;\n    if (props.formmethod)\n        input.formMethod = props.formmethod;\n    if (props.formnovalidate)\n        input.formNoValidate = props.formnovalidate;\n    if (props.formtarget)\n        input.formTarget = props.formtarget;\n    if (props.autofocus)\n        input.autofocus = props.autofocus;\n    if (props.multiple)\n        input.multiple = props.multiple;\n    if (props.capture)\n        input.capture = props.capture;\n    return input;\n};\nexports[\"default\"] = Input;\n\n\n//# sourceURL=webpack://token-ui/./src/components/Inputs.tsx?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Input = exports.Button = void 0;\nconst Button_1 = __importDefault(__webpack_require__(/*! ./components/Button */ \"./src/components/Button.tsx\"));\nexports.Button = Button_1.default;\nconst Inputs_1 = __importDefault(__webpack_require__(/*! ./components/Inputs */ \"./src/components/Inputs.tsx\"));\nexports.Input = Inputs_1.default;\n\n\n//# sourceURL=webpack://token-ui/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});