const chatSelector = 'ytd-live-chat-frame';
const chatAppFrameSelector = 'iframe#chatframe';
const playerSizeButtonSelector = '.ytp-size-button';
const chatAppSelector = 'yt-live-chat-app';

/**
 * if found DOM by selector, exec function with selector
 *
 * @param {string} selector DOM selector of waiting generate
 * @param {function} callback exec function after found DOM
 * @return {boolean} is completed or not found DOM
 */
function execToSelector(selector, callback) {
  const element = document.querySelector(selector);

  if (element == null) {
    return false;
  }

  callback($(selector));

  return true;
}

/**
 * wait until found DOM by selector, exec function with selector
 *
 * @param {string} selector DOM selector of waiting generate
 * @param {function} callback exec function after found DOM
 */
function execToSelectorWithWait(selector, callback) {
  // no wait succeeded to return
  if (execToSelector(selector, callback)) {
    return;
  }

  // wait DOM generate interval 500ms
  let interval = setInterval(function () {
    if (execToSelector(selector, callback)) {
      // if found and exec, interval break
      clearInterval(interval);
    }
  }, 500);
}

/**
 * get player mode
 *
 * @return {boolean} is theater mode
 */
function isTheaterMode() {
  // read cookie by 'wide'
  // theater mode is 1
  return getCookie('wide') == 1;
}

/**
 * change chat overlay mode
 *
 * @param {Boolean} enable
 */
function changeOverlayMode(enable) {
  const className = 'overlay-mode';

  execToSelectorWithWait(chatSelector, function (selector) {
    // toggle class
    selector.toggleClass(className, enable);

    // chat window height hit video player
    // fitChatWindowSize(); // fix it.
  });

  // appry iframe
  execToSelectorWithWait(chatAppFrameSelector, function (selector) {
    selector.contents()
      .find(chatAppSelector)
      .toggleClass(className, enable);
  });
}

/**
 * chat window height fit player
 *
 * TODO: now do not run correctly, because do not wait changing player mode and height, fix it.
 */
function fitChatWindowSize() {
  // get video height
  const height = $('.html5-video-container video').height();

  // minus video UI height(30px)
  $('#chat').height(height - 30);
}

/**
 * get cookie by name
 *
 * @param {string} name cookie name
 * @return {boolean|null} cookie value
 */
function getCookie(name) {
  const cookies = document.cookie.split('; ');

  for (let i = 0; cookies.length > i; i++) {
    const cookie = cookies[i].split('=');

    if (cookie[0] === name) {
      return cookie[1];
    }
  }

  return null;
}

/**
 * toggle chat mode
 */
function toggleMode() {
  changeOverlayMode(!isTheaterMode());
}

/**
 * initialize
 */
function initialize() {
  // click to toggle player mode button
  $(playerSizeButtonSelector).on('click', toggleMode);

  // initialize mode
  changeOverlayMode(isTheaterMode());
}

// initialize after loaded
$(window).on('load', initialize);
