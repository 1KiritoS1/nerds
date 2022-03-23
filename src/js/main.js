/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions.js */ \"./src/js/modules/functions.js\");\n\r\n\r\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();\r\n\r\n//* --- Sort setting by default --- *//\r\nconst links = document.querySelectorAll('.catalog__type'),\r\n\tarrows = document.querySelectorAll('.catalog__arrow'),\r\n\tpages = document.querySelectorAll('.page__link');\r\n\r\nconst destruction = (array) => {\r\n\tfor(let index of array) {\r\n\t\tindex.classList.remove('active');\r\n\t}\r\n}\r\n\r\nlinks.forEach((link) => {\r\n\tlink.addEventListener('click', (e) => {\r\n\t\te.preventDefault();\r\n\t\tdestruction(links);\r\n\t\tlink.classList.add('active');\t\t\r\n\t});\r\n});\r\narrows.forEach((arrow) => {\r\n\tarrow.addEventListener('click', (e) => {\r\n\t\te.preventDefault();\r\n\t\tdestruction(arrows);\r\n\t\tarrow.classList.add('active');\r\n\t})\r\n});\r\npages.forEach((page) => {\r\n\tpage.addEventListener('click', (e) => {\r\n\t\te.preventDefault();\r\n\t\tdestruction(pages);\r\n\t\tpage.classList.add('active');\t\t\r\n\t});\r\n});\r\n\r\n//* --- Input-Range setting --- *//\r\nif (window.location.pathname.indexOf('catalog.html')) {\r\n\tlet $slider = $(\"#range\");\r\n\tlet $fill = $('.range__bar .range__fill');\r\n\r\n\tfunction setBar() {\r\n\t\t$fill.css(\"width\", $slider.val() + \"%\");\r\n\t}\r\n\t\r\n\t$slider.on(\"input\", setBar);\r\n\tsetBar();\r\n}\r\n\r\n//* --- Burger --- *//\r\nconst burgerBtn = document.querySelector('.header__burger');\r\nconst burgerMenu = document.querySelector('.nav');\r\nconst burgerList = [burgerBtn, burgerMenu];\r\nburgerBtn.addEventListener('click', () => {\r\n\tburgerList.forEach((e) => {\r\n\t\te.classList.toggle('active');\r\n\t})\r\n\t\r\n\t// Anchor crossing\r\n\tfor (let i = 0; i < burgerList.length; i++) {\r\n\t\tif (burgerList[i].classList.contains('active')) {\r\n\t\t\tdocument.body.style.overflow = 'hidden';\r\n\t\t\tdocument.documentElement.style.scrollBehavior = 'auto';\r\n\t\t} else {\r\n\t\t\tdocument.body.style.overflow = 'auto';\t\r\n\t\t\tdocument.documentElement.style.scrollBehavior = 'smooth';\r\n\t\t}\r\n\t}\r\n})\r\n\r\n// Anchor crossing\r\nconst navLinks = document.querySelectorAll('.nav__link');\r\nnavLinks.forEach((navLink) => {\r\n\tnavLink.addEventListener('click', (e) => {\r\n\t\tdestruction(navLinks);\r\n\t\tdocument.body.style.overflow = 'auto';\t\r\n\t\tsetTimeout(()=> {\r\n\t\t\tdocument.documentElement.style.scrollBehavior = 'smooth';\t\r\n\t\t}, 1000);\r\n\t});\r\n});\n\n//# sourceURL=webpack://createx/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/functions.js":
/*!*************************************!*\
  !*** ./src/js/modules/functions.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isWebp\": () => (/* binding */ isWebp)\n/* harmony export */ });\nfunction isWebp() {\r\n    // \r\n    function testWebP(callback) {\r\n        let webP = new Image();\r\n        webP.onload = webP.onerror = function () {\r\n            callback(webP.height == 2);\r\n        };\r\n        webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n    }\r\n        \r\n    testWebP(function (support) {\r\n        if (support == true) {\r\n            document.querySelector('body').classList.add('webp');\r\n        } else {\r\n            document.querySelector('body').classList.add('no-webp');\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack://createx/./src/js/modules/functions.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;
