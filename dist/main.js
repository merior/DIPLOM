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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_threeslider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/threeslider */ \"./src/modules/threeslider.js\");\n/* harmony import */ var _modules_swipeUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/swipeUp */ \"./src/modules/swipeUp.js\");\n/* harmony import */ var _modules_twoSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/twoSlider */ \"./src/modules/twoSlider.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_threeslider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_swipeUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_twoSlider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n\n\n//# sourceURL=webpack://diploma/./src/index.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst modal = () => {\r\n    const headerModal = document.querySelector('.header-modal')\r\n    const serviceModal = document.querySelector('.services-modal')\r\n\r\n    const overlay = document.querySelector('.overlay')\r\n\r\n    const closeHeaderModalBtn = document.querySelector('.header-modal__close')\r\n    const closeServiceModalBtn = document.querySelector('.services-modal__close')\r\n    const fancyBtns = document.querySelectorAll('.fancyboxModal')\r\n\r\n    fancyBtns.forEach(btn => {\r\n        btn.addEventListener('click', (e) => {\r\n            if (btn.hash === '#callback') {\r\n                // console.log('#callback');\r\n                headerModal.style.display = 'block'\r\n                overlay.style.display = 'block'\r\n            } else if (btn.hash === '#application') {\r\n                // console.log('no application');\r\n                serviceModal.style.display = 'block'\r\n                overlay.style.display = 'block'\r\n                \r\n            }\r\n        })\r\n    })\r\n\r\n    closeHeaderModalBtn.addEventListener('click', () => {\r\n        headerModal.style.display = 'none'\r\n        overlay.style.display = 'none'\r\n    })\r\n    closeServiceModalBtn.addEventListener('click', () => {\r\n        serviceModal.style.display = 'none'\r\n        overlay.style.display = 'none'\r\n    })\r\n    \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://diploma/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/swipeUp.js":
/*!********************************!*\
  !*** ./src/modules/swipeUp.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst up = () => {\r\n    const smoothScrollBtn = document.querySelector('.smooth-scroll')\r\n\r\n    smoothScrollBtn.style.display = 'none'\r\n    \r\n    const trackingScroll = () => {\r\n        let scrolled = window.scrollY\r\n        let coordinates = document.documentElement.clientHeight\r\n        \r\n        if (scrolled > coordinates) {\r\n            smoothScrollBtn.style.display = 'block'\r\n        }else if (scrolled < coordinates) {\r\n            smoothScrollBtn.style.display = 'none'\r\n        }\r\n    }\r\n\r\n    function topFunction() {\r\n        window.scrollTo({top: 0, behavior: 'smooth'})\r\n    }\r\n\r\n    smoothScrollBtn.addEventListener('click', topFunction)\r\n    window.addEventListener('scroll', trackingScroll)\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (up);\n\n//# sourceURL=webpack://diploma/./src/modules/swipeUp.js?");

/***/ }),

/***/ "./src/modules/threeslider.js":
/*!************************************!*\
  !*** ./src/modules/threeslider.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    const benefitItems = document.querySelectorAll('.benefits__item')\r\n\r\n    const checkForInnerWidth = () => {\r\n            benefitItems.forEach((benefitItem, i) => {\r\n                if (window.innerWidth >= 576) {\r\n                    if (i > 2) {\r\n                        benefitItem.classList.add('not-active')\r\n                    }\r\n                } else {\r\n                    if (i > 0) {\r\n                        benefitItem.classList.add('not-active')\r\n                    }\r\n                }   \r\n            })\r\n    }\r\n\r\n    checkForInnerWidth()\r\n    \r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.benefits__arrow--right')) {\r\n            benefitItems.forEach(benefitItem => {\r\n                if (benefitItem.classList.contains('not-active')) {\r\n                    benefitItem.classList.remove('not-active')\r\n                } else {\r\n                    benefitItem.classList.add('not-active')\r\n                }\r\n            })\r\n        }\r\n        if (e.target.closest('.benefits__arrow--left')) {\r\n            benefitItems.forEach(benefitItem => {\r\n                if (benefitItem.classList.contains('not-active')) {\r\n                    benefitItem.classList.remove('not-active')\r\n                } else {\r\n                    benefitItem.classList.add('not-active')\r\n                }\r\n            })\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://diploma/./src/modules/threeslider.js?");

/***/ }),

/***/ "./src/modules/twoSlider.js":
/*!**********************************!*\
  !*** ./src/modules/twoSlider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst two = () => {\r\n    const cards = document.querySelectorAll('.col-md-12.col-lg-6')\r\n\r\n    const checkForInnerWidth = () => {\r\n        cards.forEach((card, i) => {\r\n            if (window.innerWidth >= 576) {\r\n                if (i > 2) {\r\n                    card.classList.add('not-active')\r\n                }\r\n            } else {\r\n                if (i > 0) {\r\n                    card.classList.add('not-active')\r\n                }\r\n            }   \r\n        })\r\n}\r\n\r\ncheckForInnerWidth()\r\n\r\n\r\ndocument.addEventListener('click', (e) => {\r\n    if (e.target.closest('.services__arrow--right')) {\r\n        cards.forEach(card => {\r\n            if (card.classList.contains('not-active')) {\r\n                card.classList.remove('not-active')\r\n            } else {\r\n                card.classList.add('not-active')\r\n            }\r\n        })\r\n    }\r\n    if (e.target.closest('.services__arrow--left')) {\r\n        cards.forEach(card => {\r\n            if (card.classList.contains('not-active')) {\r\n                card.classList.remove('not-active')\r\n            } else {\r\n                card.classList.add('not-active')\r\n            }\r\n        })\r\n    }\r\n})\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (two);\n\n//# sourceURL=webpack://diploma/./src/modules/twoSlider.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;