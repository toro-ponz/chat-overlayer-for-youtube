!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Selector=class{constructor(e){this.query=e}get element(){const e=document.querySelector(this.query);if(null===e)throw new Error("DOM not found with selector."+this.query);return e}get elements(){return document.querySelectorAll(this.query)}get htmlElement(){const e=this.element;if(null===e)throw new Error("DOM is not HTMLElement.");return e}get htmlElements(){return document.querySelectorAll(this.query)}isGenerated(){return null!==document.querySelector(this.query)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.MessageManager=class{setListener(e){chrome.runtime.onMessage.addListener(e)}send(e){chrome.runtime.sendMessage(e)}sendToActiveTab(e){chrome.tabs.query({active:!0,currentWindow:!0},t=>{void 0!==t[0]&&null!=t[0].id&&chrome.tabs.sendMessage(t[0].id,e)})}},function(e){e[e.SET_OVERLAY_MODE=0]="SET_OVERLAY_MODE",e[e.TOGGLE_CHAT_INPUT_ENABLED=1]="TOGGLE_CHAT_INPUT_ENABLED",e[e.UPDATE_ICON=2]="UPDATE_ICON",e[e.KEY_DOWN=3]="KEY_DOWN"}(t.MessageType||(t.MessageType={}))},,,,,,,,,,,,,,,function(e,t,n){e.exports=n(17)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),new(n(18).Background)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(19),o=n(1),s=n(20),a=n(0);class i extends a.Selector{constructor(){super("body"),this.declarativeContent=new r.DeclarativeContent,this.messageManager=new o.MessageManager,this.page=new s.Page,this.initialize()}initialize(){this.messageManager.setListener(e=>{switch(e.type){case o.MessageType.UPDATE_ICON:const t=e.data.isOverlayMode;chrome.tabs.query({active:!0,currentWindow:!0},e=>{null!=e[0]&&this.page.updateMode(e[0],t,()=>{})});break;case o.MessageType.SET_OVERLAY_MODE:case o.MessageType.TOGGLE_CHAT_INPUT_ENABLED:case o.MessageType.KEY_DOWN:this.messageManager.sendToActiveTab(e)}}),chrome.pageAction.onClicked.addListener(e=>{this.page.getIsOverlayMode(e,e=>{this.sendMessage(!e)})})}sendMessage(e){const t={type:o.MessageType.SET_OVERLAY_MODE,data:{isOverlayMode:e}};this.messageManager.sendToActiveTab(t)}}t.Background=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.DeclarativeContent=class{constructor(){this.initialize()}initialize(){chrome.declarativeContent.onPageChanged.removeRules(void 0,()=>{chrome.declarativeContent.onPageChanged.addRules([{conditions:[new chrome.declarativeContent.PageStateMatcher({pageUrl:{hostEquals:"www.youtube.com"}})],actions:[new chrome.declarativeContent.ShowPageAction]}])})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o;t.Page=class{getIsOverlayMode(e,t){null!=e.id&&chrome.pageAction.getTitle({tabId:e.id},e=>{t(e==o.ENABLED)})}updateMode(e,t,n){this.updateIcon(e,t,()=>{this.updateTitle(e,t,n)})}updateIcon(e,t,n){null!=e.id&&chrome.pageAction.setIcon({path:t?r.ENABLED:r.DISABLED,tabId:e.id},n)}updateTitle(e,t,n){null!=e.id&&chrome.pageAction.setTitle({title:t?o.ENABLED:o.DISABLED,tabId:e.id},n)}},function(e){e.ENABLED="../icons/16.png",e.DISABLED="../icons/off.png"}(r||(r={})),function(e){e.ENABLED="disable overlay mode",e.DISABLED="enable overlay mode"}(o||(o={}))}]);