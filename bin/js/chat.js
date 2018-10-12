const changeOverlayModeClassName = 'overlay-mode';
const chatAppSelector = 'yt-live-chat-app';

/**
 * get player mode
 *
 * @return {boolean} is theater mode
 */
function isTheaterMode() {
  // read cookie by 'wide'
  // theater mode is 1.
  return getCookie('wide') == 1;
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
 * change chat overlay mode
 *
 * @param {Boolean} enable
 */
function changeOverlayMode(enable) {
  $(chatAppSelector).toggleClass(changeOverlayModeClassName, enable);
}

/**
 * initialize
 */
function initialize() {
  // initialize mode
  changeOverlayMode(isTheaterMode());
}

// initialize after loaded
$(window).on('load', initialize);
