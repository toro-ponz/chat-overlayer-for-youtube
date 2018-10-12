import { Cookies } from 'components/Cookies'
import { ChatAppSelector } from 'chat/ChatAppSelector'

/**
 * @export
 * @class Chat
 */
export class Chat {
  /**
   * cookies instance
   *
   * @private
   * @type {Cookies}
   * @memberof Chat
   */
  private cookies: Cookies

  /**
   * is overlay mode enabled
   *
   * @private
   * @type {boolean}
   * @memberof Chat
   */
  private isOverlayMode: boolean

  /**
   * chat app selector instance
   *
   * @private
   * @type {ChatAppSelector}
   * @memberof Chat
   */
  private chatAppSelector: ChatAppSelector

  /**
   * Creates an instance of Chat.
   *
   * @memberof Chat
   */
  public constructor() {
    this.cookies = new Cookies()
    this.isOverlayMode = this.cookies.getValue('wide') === '1'
    this.chatAppSelector = new ChatAppSelector()

    this.initialize()
  }

  /**
   * initialize
   *
   * @private
   * @memberof Chat
   */
  private initialize(): void {
    this.chatAppSelector.changeMode(this.isOverlayMode)
  }
}
