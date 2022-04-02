(()=>{"use strict";var e={208:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Background=void 0;const a=s(279),n=s(265),r=s(597),o=s(61);class i extends o.Selector{constructor(){super("body"),this.declarativeContent=new a.DeclarativeContent,this.messageManager=new n.MessageManager,this.page=new r.Page,this.initialize()}initialize(){this.messageManager.setListener(((e,t,s)=>{switch(e.type){case n.MessageType.UPDATE_ICON:const t=e.data.isOverlayMode;chrome.tabs.query({active:!0,currentWindow:!0},(e=>{null!=e[0]&&this.page.updateMode(e[0],t,(()=>{}))}));break;case n.MessageType.SET_OVERLAY_MODE:case n.MessageType.TOGGLE_CHAT_INPUT_ENABLED:case n.MessageType.KEY_DOWN:this.messageManager.sendToActiveTab(e)}s()})),chrome.action.onClicked.addListener((e=>{this.page.getIsOverlayMode(e,(e=>{this.sendMessage(!e)}))}))}sendMessage(e){const t={type:n.MessageType.SET_OVERLAY_MODE,data:{isOverlayMode:e}};this.messageManager.sendToActiveTab(t)}}t.Background=i},279:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DeclarativeContent=void 0,t.DeclarativeContent=class{constructor(){this.initialize()}initialize(){chrome.declarativeContent.onPageChanged.removeRules(void 0,(()=>{chrome.declarativeContent.onPageChanged.addRules([{conditions:[new chrome.declarativeContent.PageStateMatcher({pageUrl:{hostEquals:"www.youtube.com"}})],actions:[new chrome.declarativeContent.ShowPageAction]}])}))}}},265:(e,t)=>{var s;Object.defineProperty(t,"__esModule",{value:!0}),t.MessageType=t.MessageManager=void 0,t.MessageManager=class{setListener(e){chrome.runtime.onMessage.addListener(e)}send(e){chrome.runtime.sendMessage(e)}sendToActiveTab(e){chrome.tabs.query({active:!0,currentWindow:!0},(t=>{void 0!==t[0]&&null!=t[0].id&&chrome.tabs.sendMessage(t[0].id,e)}))}},(s=t.MessageType||(t.MessageType={}))[s.SET_OVERLAY_MODE=0]="SET_OVERLAY_MODE",s[s.TOGGLE_CHAT_INPUT_ENABLED=1]="TOGGLE_CHAT_INPUT_ENABLED",s[s.UPDATE_ICON=2]="UPDATE_ICON",s[s.KEY_DOWN=3]="KEY_DOWN"},597:(e,t)=>{var s,a;Object.defineProperty(t,"__esModule",{value:!0}),t.Page=void 0,t.Page=class{getIsOverlayMode(e,t){null!=e.id&&chrome.action.getTitle({tabId:e.id},(e=>{t(e==a.ENABLED)}))}updateMode(e,t,s){this.updateIcon(e,t,(()=>{this.updateTitle(e,t,s)}))}updateIcon(e,t,a){null!=e.id&&chrome.action.setIcon({path:t?s.ENABLED:s.DISABLED,tabId:e.id},a)}updateTitle(e,t,s){null!=e.id&&chrome.action.setTitle({title:t?a.ENABLED:a.DISABLED,tabId:e.id},s)}},function(e){e.ENABLED="../icons/16.png",e.DISABLED="../icons/off.png"}(s||(s={})),function(e){e.ENABLED="disable overlay mode",e.DISABLED="enable overlay mode"}(a||(a={}))},61:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Selector=void 0,t.Selector=class{constructor(e){this.query=e}get element(){const e=document.querySelector(this.query);if(null===e)throw new Error("DOM not found with selector."+this.query);return e}get elements(){return document.querySelectorAll(this.query)}get htmlElement(){const e=this.element;if(null===e)throw new Error("DOM is not HTMLElement.");return e}get htmlElements(){return document.querySelectorAll(this.query)}isGenerated(){return null!==document.querySelector(this.query)}}}},t={};new(function s(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,s),r.exports}(208).Background)})();