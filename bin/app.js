const theaterModeClassName = 'theater-mode';
const chatSelector = 'ytd-live-chat-frame';
const chatAppFrameSelector = 'iframe#chatframe';
const chatAppSelector = 'yt-live-chat-app';
const theaterModeContainerSelector = '#player-theater-container';
const playerSizeButtonSelector = '.ytp-size-button';

function getDOM(selector) {
  return $(selector);
}

/**
 * シアターモードか否か
 */
function isTheaterMode() {
  const container = getDOM(theaterModeContainerSelector);

  // 子にDOM要素がある場合はシアターモード
  return container.children().length !== 0;
}

/**
 * シアターモードを変更する
 *
 * @param {boolean} enable 有効にするか否か
 */
function theaterMode(enable) {
  const chatElement = getDOM(chatSelector);
  const chatAppElement = getDOM(chatAppFrameSelector).contents().find(chatAppSelector)

  chatElement.toggleClass(theaterModeClassName, enable);
  chatAppElement.toggleClass(theaterModeClassName, enable);

  // コメント欄の高さを調節する
  fitChatWindowSize();
}

/**
 * モードが変わる際に適応する
 */
function changeMode() {
  setTimeout(function () { theaterMode(isTheaterMode()); }, 100);
  setTimeout(function () { theaterMode(isTheaterMode()); }, 300);
  setTimeout(function () { theaterMode(isTheaterMode()); }, 500);
  setTimeout(function () { theaterMode(isTheaterMode()); }, 750);
  setTimeout(function () { theaterMode(isTheaterMode()); }, 1000);
  setTimeout(function () { theaterMode(isTheaterMode()); }, 2000);
  setTimeout(function () { theaterMode(isTheaterMode()); }, 3000);
  setTimeout(function () { theaterMode(isTheaterMode()); }, 4000);
  setTimeout(function () { theaterMode(isTheaterMode()); }, 5000);
}

/**
 * プレイヤーのサイズにコメント欄を合わせる
 */
function fitChatWindowSize() {
  const height = getDOM('.html5-video-container video').height();

  getDOM('#chat').height(height - 30);
}

/**
 * 初期化処理
 */
function initialize() {
  // 画面サイズのトグルボタン押下時
  getDOM(playerSizeButtonSelector).on('click', changeMode);

  // 画面サイズが変わったときはDOMが再生成されるため、再度モードの適用を行う
  $(window).on('resize', changeMode);

  // モード適用
  theaterMode(isTheaterMode());
}

/**
 * ページ読み込み完了時の処理
 */
function loaded() {
  // initialize();
  setTimeout(initialize, 5000);
}

// ページ読み込み完了後初期化
$(window).on('load', loaded);
