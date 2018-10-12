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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/app.ts":
/*!***********************!*\
  !*** ./src/ts/app.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar YouTubeLiveOverlayer_1 = __webpack_require__(/*! app/YouTubeLiveOverlayer */ \"./src/ts/app/YouTubeLiveOverlayer.ts\");\r\n// initialize after loaded\r\nwindow.onload = function () {\r\n    // wait DOM generate bt SetTimeout\r\n    // TODO: fix it.\r\n    setTimeout(function () {\r\n        var youTubeLiveOverlayer = new YouTubeLiveOverlayer_1.YouTubeLiveOverlayer();\r\n    }, 2500);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/ts/app.ts?");

/***/ }),

/***/ "./src/ts/app/ChatAppFrameSelector.ts":
/*!********************************************!*\
  !*** ./src/ts/app/ChatAppFrameSelector.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Selector_1 = __webpack_require__(/*! components/Selector */ \"./src/ts/components/Selector.ts\");\r\nvar ChatAppSelector_1 = __webpack_require__(/*! chat/ChatAppSelector */ \"./src/ts/chat/ChatAppSelector.ts\");\r\n/**\r\n * @export\r\n * @class ChatAppFrameSelector\r\n * @extends {Selector}\r\n */\r\nvar ChatAppFrameSelector = /** @class */ (function (_super) {\r\n    __extends(ChatAppFrameSelector, _super);\r\n    /**\r\n     * Creates an instance of ChatAppFrameSelector.\r\n     *\r\n     * @memberof ChatAppFrameSelector\r\n     */\r\n    function ChatAppFrameSelector() {\r\n        return _super.call(this, 'iframe#chatframe') || this;\r\n    }\r\n    Object.defineProperty(ChatAppFrameSelector.prototype, \"element\", {\r\n        /**\r\n         * get iframe element\r\n         *\r\n         * @readonly\r\n         * @type {HTMLIFrameElement}\r\n         * @memberof ChatAppFrameSelector\r\n         */\r\n        get: function () {\r\n            var element = document.querySelector(this.query);\r\n            if (element === null) {\r\n                throw new Error('DOM is not HTMLframeElement');\r\n            }\r\n            return element;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(ChatAppFrameSelector.prototype, \"innerDocument\", {\r\n        /**\r\n         * get document inner iframe\r\n         *\r\n         * @readonly\r\n         * @type {Document}\r\n         * @memberof ChatAppFrameSelector\r\n         */\r\n        get: function () {\r\n            var frame = this.element;\r\n            if (frame.contentWindow === null || frame.contentWindow.document === null) {\r\n                throw new Error('document not found.');\r\n            }\r\n            return frame.contentWindow.document;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(ChatAppFrameSelector.prototype, \"chatAppSelector\", {\r\n        /**\r\n         * get inner chat app selector instance\r\n         *\r\n         * @readonly\r\n         * @type {ChatAppSelector}\r\n         * @memberof ChatAppFrameSelector\r\n         */\r\n        get: function () {\r\n            return new ChatAppSelector_1.ChatAppSelector(this.innerDocument);\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return ChatAppFrameSelector;\r\n}(Selector_1.Selector));\r\nexports.ChatAppFrameSelector = ChatAppFrameSelector;\r\n\n\n//# sourceURL=webpack:///./src/ts/app/ChatAppFrameSelector.ts?");

/***/ }),

/***/ "./src/ts/app/ChatSelector.ts":
/*!************************************!*\
  !*** ./src/ts/app/ChatSelector.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Selector_1 = __webpack_require__(/*! components/Selector */ \"./src/ts/components/Selector.ts\");\r\n/**\r\n * @export\r\n * @class ChatSelector\r\n * @extends {Selector}\r\n */\r\nvar ChatSelector = /** @class */ (function (_super) {\r\n    __extends(ChatSelector, _super);\r\n    /**\r\n     * Creates an instance of ChatSelector.\r\n     *\r\n     * @memberof ChatSelector\r\n     */\r\n    function ChatSelector() {\r\n        var _this = _super.call(this, 'ytd-live-chat-frame') || this;\r\n        /**\r\n         * class name attaches when overlay mode enabled\r\n         *\r\n         * @private\r\n         * @type {string}\r\n         * @memberof ChatSelector\r\n         */\r\n        _this.overlayClass = 'overlay-mode';\r\n        return _this;\r\n    }\r\n    Object.defineProperty(ChatSelector.prototype, \"isOverlayMode\", {\r\n        /**\r\n         * get chat window is overlay mode\r\n         *\r\n         * @readonly\r\n         * @private\r\n         * @type {boolean}\r\n         * @memberof ChatSelector\r\n         */\r\n        get: function () {\r\n            return this.element.classList.contains(this.overlayClass);\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    /**\r\n     * change chat overlay mode\r\n     *\r\n     * @param {boolean} isOverlayMode\r\n     * @memberof ChatSelector\r\n     */\r\n    ChatSelector.prototype.changeMode = function (isOverlayMode) {\r\n        this.element.classList.toggle(this.overlayClass, isOverlayMode);\r\n        // TODO: get correct height from player\r\n        this.setHeight(isOverlayMode ? 750 : 530);\r\n    };\r\n    /**\r\n     * toggle chat overlay mode\r\n     *\r\n     * @memberof ChatSelector\r\n     */\r\n    ChatSelector.prototype.toggleMode = function () {\r\n        this.changeMode(!this.isOverlayMode);\r\n    };\r\n    /**\r\n     * set chat window height\r\n     *\r\n     * @param {number} height\r\n     * @memberof ChatSelector\r\n     */\r\n    ChatSelector.prototype.setHeight = function (height) {\r\n        this.element.setAttribute('style', \"height: \" + height.toString() + \"px;\");\r\n    };\r\n    return ChatSelector;\r\n}(Selector_1.Selector));\r\nexports.ChatSelector = ChatSelector;\r\n\n\n//# sourceURL=webpack:///./src/ts/app/ChatSelector.ts?");

/***/ }),

/***/ "./src/ts/app/PlayerModeSelector.ts":
/*!******************************************!*\
  !*** ./src/ts/app/PlayerModeSelector.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Selector_1 = __webpack_require__(/*! components/Selector */ \"./src/ts/components/Selector.ts\");\r\n/**\r\n * @export\r\n * @class PlayerModeSelector\r\n * @extends {Selector}\r\n */\r\nvar PlayerModeSelector = /** @class */ (function (_super) {\r\n    __extends(PlayerModeSelector, _super);\r\n    /**\r\n     * Creates an instance of PlayerModeSelector.\r\n     *\r\n     * @memberof PlayerModeSelector\r\n     */\r\n    function PlayerModeSelector() {\r\n        return _super.call(this, '.ytp-size-button') || this;\r\n    }\r\n    /**\r\n     * set onclick event function\r\n     *\r\n     * @param {() => void} callback\r\n     * @returns {boolean}\r\n     * @memberof PlayerModeSelector\r\n     */\r\n    PlayerModeSelector.prototype.setOnclick = function (callback) {\r\n        var htmlElement = this.element;\r\n        if (htmlElement === null) {\r\n            return false;\r\n        }\r\n        htmlElement.onclick = callback;\r\n        return true;\r\n    };\r\n    return PlayerModeSelector;\r\n}(Selector_1.Selector));\r\nexports.PlayerModeSelector = PlayerModeSelector;\r\n\n\n//# sourceURL=webpack:///./src/ts/app/PlayerModeSelector.ts?");

/***/ }),

/***/ "./src/ts/app/YouTubeLiveOverlayer.ts":
/*!********************************************!*\
  !*** ./src/ts/app/YouTubeLiveOverlayer.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Cookies_1 = __webpack_require__(/*! components/Cookies */ \"./src/ts/components/Cookies.ts\");\r\nvar ChatSelector_1 = __webpack_require__(/*! app/ChatSelector */ \"./src/ts/app/ChatSelector.ts\");\r\nvar ChatAppFrameSelector_1 = __webpack_require__(/*! app/ChatAppFrameSelector */ \"./src/ts/app/ChatAppFrameSelector.ts\");\r\nvar PlayerModeSelector_1 = __webpack_require__(/*! app/PlayerModeSelector */ \"./src/ts/app/PlayerModeSelector.ts\");\r\n/**\r\n * @export\r\n * @class YouTubeLiveOverlayer\r\n */\r\nvar YouTubeLiveOverlayer = /** @class */ (function () {\r\n    /**\r\n     * Creates an instance of YouTubeLiveOverlayer.\r\n     *\r\n     * @memberof YouTubeLiveOverlayer\r\n     */\r\n    function YouTubeLiveOverlayer() {\r\n        this.cookies = new Cookies_1.Cookies();\r\n        this.isOverlayMode = this.cookies.getValue('wide') === '1';\r\n        this.chatSelector = new ChatSelector_1.ChatSelector();\r\n        this.chatAppFrameSelector = new ChatAppFrameSelector_1.ChatAppFrameSelector();\r\n        this.playerModeSelector = new PlayerModeSelector_1.PlayerModeSelector();\r\n        this.initialize();\r\n    }\r\n    /**\r\n     * initialize\r\n     *\r\n     * @memberof YouTubeLiveOverlayer\r\n     */\r\n    YouTubeLiveOverlayer.prototype.initialize = function () {\r\n        var _this = this;\r\n        this.chatSelector.changeMode(this.isOverlayMode);\r\n        this.playerModeSelector.setOnclick(function () {\r\n            _this.chatSelector.toggleMode();\r\n            _this.chatAppFrameSelector.chatAppSelector.toggleMode();\r\n        });\r\n    };\r\n    return YouTubeLiveOverlayer;\r\n}());\r\nexports.YouTubeLiveOverlayer = YouTubeLiveOverlayer;\r\n\n\n//# sourceURL=webpack:///./src/ts/app/YouTubeLiveOverlayer.ts?");

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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * DOM selector abstract class\r\n *\r\n * @export\r\n * @class Selector\r\n */\r\nvar Selector = /** @class */ (function () {\r\n    /**\r\n     * Creates an instance of Selector.\r\n     *\r\n     * @param {string} selector\r\n     * @memberof Selector\r\n     */\r\n    function Selector(query) {\r\n        this.query = query;\r\n    }\r\n    Object.defineProperty(Selector.prototype, \"element\", {\r\n        /**\r\n         * get element with query selector\r\n         *\r\n         * @readonly\r\n         * @type {Element}\r\n         * @memberof Selector\r\n         */\r\n        get: function () {\r\n            var element = document.querySelector(this.query);\r\n            if (element === null) {\r\n                throw new Error('DOM not found with selector.');\r\n            }\r\n            return element;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    /**\r\n     * DOM generated or not found\r\n     *\r\n     * @returns {boolean}\r\n     * @memberof Selector\r\n     */\r\n    Selector.prototype.isGenerated = function () {\r\n        var element = document.querySelector(this.query);\r\n        return element !== null;\r\n    };\r\n    return Selector;\r\n}());\r\nexports.Selector = Selector;\r\n\n\n//# sourceURL=webpack:///./src/ts/components/Selector.ts?");

/***/ })

/******/ });