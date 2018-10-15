/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scss/chat.scss":
/*!****************************!*\
  !*** ./src/scss/chat.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/chat.scss?");

/***/ }),

/***/ "./src/ts/chat.ts":
/*!************************!*\
  !*** ./src/ts/chat.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Chat_1 = __webpack_require__(/*! chat/Chat */ \"./src/ts/chat/Chat.ts\");\r\n// initialize after loaded\r\nwindow.onload = function () {\r\n    var count = 0;\r\n    // wait generate DOM\r\n    var interval = setInterval(function () {\r\n        count++;\r\n        try {\r\n            new Chat_1.Chat();\r\n        }\r\n        catch (error) {\r\n            // timeout 10000ms\r\n            if (count < 200) {\r\n                return;\r\n            }\r\n            throw new Error('DOM not found in 20sec.');\r\n        }\r\n        clearInterval(interval);\r\n    }, 50);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/ts/chat.ts?");

/***/ }),

/***/ "./src/ts/chat/Chat.ts":
/*!*****************************!*\
  !*** ./src/ts/chat/Chat.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Cookies_1 = __webpack_require__(/*! components/Cookies */ \"./src/ts/components/Cookies.ts\");\r\nvar ChatAppSelector_1 = __webpack_require__(/*! chat/ChatAppSelector */ \"./src/ts/chat/ChatAppSelector.ts\");\r\n/**\r\n * @export\r\n * @class Chat\r\n */\r\nvar Chat = /** @class */ (function () {\r\n    /**\r\n     * Creates an instance of Chat.\r\n     *\r\n     * @memberof Chat\r\n     */\r\n    function Chat() {\r\n        this.cookies = new Cookies_1.Cookies();\r\n        this.isOverlayMode = this.cookies.getValue('wide') === '1';\r\n        this.chatAppSelector = new ChatAppSelector_1.ChatAppSelector();\r\n        this.initialize();\r\n    }\r\n    /**\r\n     * initialize\r\n     *\r\n     * @private\r\n     * @memberof Chat\r\n     */\r\n    Chat.prototype.initialize = function () {\r\n        this.chatAppSelector.changeMode(this.isOverlayMode);\r\n    };\r\n    return Chat;\r\n}());\r\nexports.Chat = Chat;\r\n\n\n//# sourceURL=webpack:///./src/ts/chat/Chat.ts?");

/***/ }),

/***/ "./src/ts/chat/ChatAppSelector.ts":
/*!****************************************!*\
  !*** ./src/ts/chat/ChatAppSelector.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Selector_1 = __webpack_require__(/*! components/Selector */ \"./src/ts/components/Selector.ts\");\r\n/**\r\n * @export\r\n * @class ChatAppSelector\r\n * @extends {Selector}\r\n */\r\nvar ChatAppSelector = /** @class */ (function (_super) {\r\n    __extends(ChatAppSelector, _super);\r\n    /**\r\n     * Creates an instance of ChatAppSelector.\r\n     *\r\n     * @param {(Document | null)} [document=null]\r\n     * @memberof ChatAppSelector\r\n     */\r\n    function ChatAppSelector(document) {\r\n        if (document === void 0) { document = null; }\r\n        var _this = _super.call(this, 'yt-live-chat-app') || this;\r\n        /**\r\n         * class name attaches when overlay mode enabled\r\n         *\r\n         * @private\r\n         * @type {string}\r\n         * @memberof ChatAppSelector\r\n         */\r\n        _this.overlayClass = 'overlay-mode';\r\n        _this.document = document;\r\n        return _this;\r\n    }\r\n    Object.defineProperty(ChatAppSelector.prototype, \"element\", {\r\n        /**\r\n         * get element with query selector\r\n         *\r\n         * @readonly\r\n         * @memberof ChatAppSelector\r\n         */\r\n        get: function () {\r\n            var d = this.document ? this.document : document;\r\n            var element = d.querySelector(this.query);\r\n            if (element === null) {\r\n                throw new Error('DOM not found with selector.');\r\n            }\r\n            return element;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(ChatAppSelector.prototype, \"isOverlayMode\", {\r\n        /**\r\n         * get chat window is overlay mode\r\n         *\r\n         * @readonly\r\n         * @private\r\n         * @type {boolean}\r\n         * @memberof ChatAppSelector\r\n         */\r\n        get: function () {\r\n            return this.element.classList.contains(this.overlayClass);\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    /**\r\n     * change chat overlay mode\r\n     *\r\n     * @param {boolean} isOverlayMode\r\n     * @memberof ChatAppSelector\r\n     */\r\n    ChatAppSelector.prototype.changeMode = function (isOverlayMode) {\r\n        this.element.classList.toggle(this.overlayClass, isOverlayMode);\r\n    };\r\n    /**\r\n     * toggle chat overlay mode\r\n     *\r\n     * @memberof ChatAppSelector\r\n     */\r\n    ChatAppSelector.prototype.toggleMode = function () {\r\n        this.changeMode(!this.isOverlayMode);\r\n    };\r\n    return ChatAppSelector;\r\n}(Selector_1.Selector));\r\nexports.ChatAppSelector = ChatAppSelector;\r\n\n\n//# sourceURL=webpack:///./src/ts/chat/ChatAppSelector.ts?");

/***/ }),

/***/ "./src/ts/components/Cookies.ts":
/*!**************************************!*\
  !*** ./src/ts/components/Cookies.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * manage cookie class\r\n *\r\n * @export\r\n * @class Cookies\r\n */\r\nvar Cookies = /** @class */ (function () {\r\n    /**\r\n     * Creates an instance of Cookies.\r\n     *\r\n     * @memberof Cookies\r\n     */\r\n    function Cookies() {\r\n        this.cookies = this.getCookies();\r\n    }\r\n    /**\r\n     * get cookie with name\r\n     *\r\n     * @param {string} name\r\n     * @returns {string}\r\n     * @memberof Cookies\r\n     */\r\n    Cookies.prototype.getValue = function (name) {\r\n        var cookie = this.cookies.filter(function (cookie) {\r\n            return cookie.key === name;\r\n        })[0];\r\n        return cookie ? cookie.value : '';\r\n    };\r\n    /**\r\n     * reload cookies\r\n     *\r\n     * @memberof Cookies\r\n     */\r\n    Cookies.prototype.update = function () {\r\n        this.cookies = this.getCookies();\r\n    };\r\n    /**\r\n     * get all cookies array\r\n     *\r\n     * @private\r\n     * @returns {Array<{ key: string, value: string }>}\r\n     * @memberof Cookies\r\n     */\r\n    Cookies.prototype.getCookies = function () {\r\n        var cookies = document.cookie.split('; ');\r\n        return cookies.map(function (cookie) {\r\n            return {\r\n                key: cookie.split('=')[0],\r\n                value: cookie.split('=')[1],\r\n            };\r\n        });\r\n    };\r\n    return Cookies;\r\n}());\r\nexports.Cookies = Cookies;\r\n\n\n//# sourceURL=webpack:///./src/ts/components/Cookies.ts?");

/***/ }),

/***/ "./src/ts/components/Selector.ts":
/*!***************************************!*\
  !*** ./src/ts/components/Selector.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * DOM selector abstract class\r\n *\r\n * @export\r\n * @class Selector\r\n */\r\nvar Selector = /** @class */ (function () {\r\n    /**\r\n     * Creates an instance of Selector.\r\n     *\r\n     * @param {string} selector\r\n     * @memberof Selector\r\n     */\r\n    function Selector(query) {\r\n        this.query = query;\r\n    }\r\n    Object.defineProperty(Selector.prototype, \"element\", {\r\n        /**\r\n         * get element with query selector\r\n         *\r\n         * @readonly\r\n         * @type {Element}\r\n         * @memberof Selector\r\n         */\r\n        get: function () {\r\n            var element = document.querySelector(this.query);\r\n            if (element === null) {\r\n                throw new Error('DOM not found with selector.');\r\n            }\r\n            return element;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Selector.prototype, \"htmlElement\", {\r\n        /**\r\n         * get html element with query selector\r\n         *\r\n         * @readonly\r\n         * @type {HTMLElement}\r\n         * @memberof Selector\r\n         */\r\n        get: function () {\r\n            var htmlElement = this.element;\r\n            if (htmlElement === null) {\r\n                throw new Error('DOM is not HTMLElement.');\r\n            }\r\n            return htmlElement;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    /**\r\n     * DOM generated or not found\r\n     *\r\n     * @returns {boolean}\r\n     * @memberof Selector\r\n     */\r\n    Selector.prototype.isGenerated = function () {\r\n        var element = document.querySelector(this.query);\r\n        return element !== null;\r\n    };\r\n    return Selector;\r\n}());\r\nexports.Selector = Selector;\r\n\n\n//# sourceURL=webpack:///./src/ts/components/Selector.ts?");

/***/ }),

/***/ 1:
/*!***************************************************!*\
  !*** multi ./src/ts/chat.ts ./src/scss/chat.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/ts/chat.ts */\"./src/ts/chat.ts\");\nmodule.exports = __webpack_require__(/*! ./src/scss/chat.scss */\"./src/scss/chat.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/ts/chat.ts_./src/scss/chat.scss?");

/***/ })

/******/ });