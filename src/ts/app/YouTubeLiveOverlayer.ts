import { Cookies } from 'components/Cookies'
import { ChatSelector } from 'app/ChatSelector';
import { ChatAppFrameSelector } from 'app/ChatAppFrameSelector'
import { PlayerModeSelector } from 'app/PlayerModeSelector'
import { OfflineStateBarSelector } from 'app/OfflineStateBarSelector'

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
   * offline state bar selector instance
   *
   * @private
   * @type {OfflineStateBarSelector}
   * @memberof YouTubeLiveOverlayer
   */
  private offlineStateBarSelector: OfflineStateBarSelector

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
    this.offlineStateBarSelector = new OfflineStateBarSelector()

    this.initialize()
  }

  /**
   * initialize
   *
   * @memberof YouTubeLiveOverlayer
   */
  public initialize(): void {
    this.chatSelector.changeMode(this.isOverlayMode)
    this.offlineStateBarSelector.changeMode(this.isOverlayMode)

    this.playerModeSelector.setOnclick(() => {
      this.chatSelector.toggleMode()
      this.offlineStateBarSelector.toggleMode()
      this.chatAppFrameSelector.chatAppSelector.toggleMode()
    })
  }

  /**
   * try new instance interval
   *
   * @static
   * @param {number} interval
   * @returns {YouTubeLiveOverlayer}
   * @memberof YouTubeLiveOverlayer
   */
  public static tryNewInterval(interval:number): YouTubeLiveOverlayer {
    const instance = this.tryNew()

    if (instance === null) {
      throw new Error('DOM not found.')
    }

    clearInterval(interval)
    return instance
  }

  /**
   * try new instance
   *
   * @static
   * @returns {(YouTubeLiveOverlayer | null)}
   * @memberof YouTubeLiveOverlayer
   */
  public static tryNew(): YouTubeLiveOverlayer | null {
    try {
      return new YouTubeLiveOverlayer()
    } catch(error) {
      return null
    }
  }
}
