(()=>{"use strict";var e={845:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const r=s(820),i=s(276),a=s(306),l=s(265),o=s(976),n=s(61),c=s(809);class d extends n.Selector{constructor(){super("body"),this.messageManager=new l.MessageManager,this.overlayModeManager=new o.OverlayModeManager(this.htmlElement),this.storage=new c.Storage,this.chatSelector=new r.ChatSelector,this.fullscreenButtonSelector=new i.FullscreenButtonSelector,this.sizeButtonSelector=new a.SizeButtonSelector,this.initialize()}dispose(){this.overlayModeManager.setMode(1)}initialize(){this.initializeOverlayMode(),this.initializeSizeListener(),this.initializeFullscreenListener(),this.initializeKeyListener(),this.initializeMessageListener()}initializeOverlayMode(){let e=this.storage.get("overlay-mode");null==e&&(e="true");const t="true"==e;this.changeOverlayMode(t)}initializeSizeListener(){this.sizeButtonSelector.setOnclick(this.chatSelector.sizeChangeListener)}initializeFullscreenListener(){document.addEventListener("fullscreenchange",(e=>{const t=!(null===document.fullscreenElement);this.chatSelector.setIsFullscreen(t)}))}initializeKeyListener(){window.addEventListener("keydown",(e=>{const t=["textarea","input"];if(null==e.target)return;let s=null;try{s=e.target}catch(e){return void console.debug(e)}if(!e.altKey){if(t.includes(s.tagName.toLowerCase()))return;if(t.includes(s.id.toLowerCase()))return}this.keydown(e.keyCode)}))}initializeMessageListener(){this.messageManager.setListener((e=>{switch(e.type){case l.MessageType.SET_OVERLAY_MODE:const t=e.data.isOverlayMode;this.changeOverlayMode(t);break;case l.MessageType.KEY_DOWN:const s=e.data.keyCode;this.keydown(s)}}))}changeOverlayMode(e){const t=e?0:1;this.overlayModeManager.setMode(t),this.chatSelector.setHeight(),this.storage.set("overlay-mode",e);const s={type:l.MessageType.UPDATE_ICON,data:{isOverlayMode:e}};this.messageManager.send(s)}toggleOverlayMode(){const e={type:l.MessageType.SET_OVERLAY_MODE,data:{isOverlayMode:!this.overlayModeManager.isEnabled}};this.messageManager.send(e)}keydown(e){switch(e){case 65:this.chatSelector.toggleAreaMode();break;case 67:const e={type:l.MessageType.TOGGLE_CHAT_INPUT_ENABLED,data:null};this.messageManager.send(e);break;case 79:this.toggleOverlayMode();break;case 84:this.chatSelector.sizeChangeListener()}}static tryNew(){try{return new d}catch(e){return null}}}t.App=d},820:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ChatSelector=void 0;const r=s(53),i=s(959),a=s(328),l=s(61),o=s(307);class n extends l.Selector{constructor(){super("ytd-live-chat-frame"),this.cookies=new o.Cookies;const e=this.cookies.isWide?1:0;this.areaModeManager=new r.AreaModeManager(this.htmlElement),this.playerModeManager=new i.PlayerModeManager(this.htmlElement,e),this.playerSelector=new a.PlayerSelector,this.initialize()}initialize(){window.onresize=()=>{this.setHeight()}}setPlayerMode(e){this.playerModeManager.setMode(e),this.setHeight()}setAreaMode(e){this.areaModeManager.setMode(e)}toggleAreaMode(){this.areaModeManager.toggleMode()}setHeight(){setTimeout((()=>{let e=this.playerSelector.height;this.playerModeManager.isFullscreen?e-=65:e-=55;const t=`\n        max-height: ${e.toString()}px;\n        height: ${e.toString()}px;\n      `;this.element.setAttribute("style",t)}),500)}setIsFullscreen(e){e?this.setPlayerMode(2):this.playerModeManager.isTheater?this.setPlayerMode(1):this.setPlayerMode(0)}setPlayerOndbclickListener(e){this.playerSelector.setOndbclickListener(e)}get sizeChangeListener(){return()=>{this.playerModeManager.isDefault?this.setPlayerMode(1):this.setPlayerMode(0)}}}t.ChatSelector=n},276:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FullscreenButtonSelector=void 0;const r=s(61);class i extends r.Selector{constructor(){super(".ytp-fullscreen-button")}setOnclickListener(e){this.htmlElements.forEach((t=>{t.addEventListener("click",e)}))}}t.FullscreenButtonSelector=i},359:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PlayerContainerSelector=void 0;const r=s(61);class i extends r.Selector{constructor(){super(".html5-video-player")}}t.PlayerContainerSelector=i},328:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PlayerSelector=void 0;const r=s(61),i=s(359);class a extends r.Selector{constructor(){super(".html5-main-video"),this.playerContainerSelector=new i.PlayerContainerSelector}get height(){return this.playerContainerSelector.htmlElement.clientHeight}setOndbclickListener(e){this.htmlElements.forEach((t=>{t.addEventListener("dblclick",e)}))}}t.PlayerSelector=a},306:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SizeButtonSelector=void 0;const r=s(61);class i extends r.Selector{constructor(){super(".ytp-size-button")}setOnclick(e){this.htmlElements.forEach((t=>{t.addEventListener("click",e)}))}}t.SizeButtonSelector=i},53:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AreaModeManager=void 0,t.AreaModeManager=class{constructor(e,t=0){this.element=e,this.setMode(t)}setMode(e){switch(e){case 0:this.element.classList.add("overlay-left"),this.element.classList.remove("overlay-right");break;case 1:this.element.classList.remove("overlay-left"),this.element.classList.add("overlay-right")}}toggleMode(){this.isLeft?this.setMode(1):this.isRight&&this.setMode(0)}get isLeft(){return this.element.classList.contains("overlay-left")}get isRight(){return this.element.classList.contains("overlay-right")}}},307:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Cookies=void 0,t.Cookies=class{constructor(){this.cookies=this.getCookies()}get isWide(){return"1"===this.getValue("wide")}getValue(e){const t=this.getCookies().filter((t=>t.key===e))[0];return t?t.value:""}update(){this.cookies=this.getCookies()}getCookies(){return document.cookie.split("; ").map((e=>({key:e.split("=")[0],value:e.split("=")[1]})))}}},265:(e,t)=>{var s;Object.defineProperty(t,"__esModule",{value:!0}),t.MessageType=t.MessageManager=void 0,t.MessageManager=class{setListener(e){chrome.runtime.onMessage.addListener(e)}send(e){chrome.runtime.sendMessage(e)}sendToActiveTab(e){chrome.tabs.query({active:!0,currentWindow:!0},(t=>{void 0!==t[0]&&null!=t[0].id&&chrome.tabs.sendMessage(t[0].id,e)}))}},(s=t.MessageType||(t.MessageType={}))[s.SET_OVERLAY_MODE=0]="SET_OVERLAY_MODE",s[s.TOGGLE_CHAT_INPUT_ENABLED=1]="TOGGLE_CHAT_INPUT_ENABLED",s[s.UPDATE_ICON=2]="UPDATE_ICON",s[s.KEY_DOWN=3]="KEY_DOWN"},976:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OverlayModeManager=void 0,t.OverlayModeManager=class{constructor(e){this.element=e}setMode(e){switch(e){case 0:this.element.classList.add("overlay-mode"),this.element.classList.remove("default-mode");break;case 1:this.element.classList.remove("overlay-mode"),this.element.classList.add("default-mode")}}toggleMode(){this.isEnabled?this.setMode(1):this.setMode(0)}get isEnabled(){return this.element.classList.contains("overlay-mode")}}},959:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PlayerModeManager=void 0,t.PlayerModeManager=class{constructor(e,t=0){this.element=e,this.setMode(t)}setMode(e){switch(e){case 0:this.element.classList.add("player-default"),this.element.classList.remove("player-theater"),this.element.classList.remove("player-fullscreen");break;case 1:this.element.classList.remove("player-default"),this.element.classList.add("player-theater"),this.element.classList.remove("player-fullscreen");break;case 2:this.element.classList.add("player-fullscreen")}}get isDefault(){return this.element.classList.contains("player-default")}get isTheater(){return this.element.classList.contains("player-theater")}get isFullscreen(){return this.element.classList.contains("player-fullscreen")}}},61:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Selector=void 0,t.Selector=class{constructor(e){this.query=e}get element(){const e=document.querySelector(this.query);if(null===e)throw new Error("DOM not found with selector."+this.query);return e}get elements(){return document.querySelectorAll(this.query)}get htmlElement(){const e=this.element;if(null===e)throw new Error("DOM is not HTMLElement.");return e}get htmlElements(){return document.querySelectorAll(this.query)}isGenerated(){return null!==document.querySelector(this.query)}}},809:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Storage=void 0,t.Storage=class{constructor(){this.keyPrefix="chat-overlayer-for-youtube-"}get(e){return window.localStorage.getItem(this.keyPrefix+e)}set(e,t){window.localStorage.setItem(this.keyPrefix+e,t)}}}},t={};function s(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,s),a.exports}(()=>{const e=s(845);let t=null;const r="YTD-LIVE-CHAT-FRAME";new MutationObserver((s=>{for(let i=0;i<s.length;i++)Array.from(s[i].addedNodes).filter((e=>e.nodeName===r)).some((()=>(t=e.App.tryNew(),!0))),Array.from(s[i].removedNodes).filter((e=>e.nodeName===r)).some((()=>(null!==t&&(t.dispose(),t=null),!0)))})).observe(document.body,{childList:!0,subtree:!0})})()})();