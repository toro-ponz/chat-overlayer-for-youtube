import { Cookies } from 'components/Cookies'
import { ChatSelector } from 'app/ChatSelector';
import { ChatAppFrameSelector } from 'app/ChatAppFrameSelector'
import { PlayerModeSelector } from 'app/PlayerModeSelector'

/**
 * @export
 * @class YouTubeLiveOverlayer
 */
export class YouTubeLiveOverlayer {
  /**
   * cookies instance
   *
   * @private
   * @type {Cookies}
   * @memberof YouTubeLiveOverlayer
   */
  private cookies: Cookies

  /**
   * is overlay mode enabled
   *
   * @private
   * @type {boolean}
   * @memberof YouTubeLiveOverlayer
   */
  private isOverlayMode: boolean

  /**
   * chat selector instance
   *
   * @private
   * @type {ChatSelector}
   * @memberof YouTubeLiveOverlayer
   */
  private chatSelector: ChatSelector

  /**
   * chat app frame selector instance
   *
   * @private
   * @type {ChatAppFrameSelector}
   * @memberof YouTubeLiveOverlayer
   */
  private chatAppFrameSelector: ChatAppFrameSelector

  /**
   * player mode selector instance
   *
   * @private
   * @type {PlayerModeSelector}
   * @memberof YouTubeLiveOverlayer
   */
  private playerModeSelector: PlayerModeSelector

  /**
   * Creates an instance of YouTubeLiveOverlayer.
   *
   * @memberof YouTubeLiveOverlayer
   */
  public constructor() {
    this.cookies = new Cookies()
    this.isOverlayMode = this.cookies.getValue('wide') === '1'
    this.chatSelector = new ChatSelector()
    this.chatAppFrameSelector = new ChatAppFrameSelector()
    this.playerModeSelector = new PlayerModeSelector()

    this.initialize()
  }

  /**
   * initialize
   *
   * @memberof YouTubeLiveOverlayer
   */
  public initialize(): void {
    this.chatSelector.changeMode(this.isOverlayMode)
    this.playerModeSelector.setOnclick(() => {
      this.chatSelector.toggleMode()
      this.chatAppFrameSelector.chatAppSelector.toggleMode()
    })
  }
}
