import { Selector } from 'components/Selector'
import { OverlayMode } from 'components/OverlayMode'
import { Storage } from 'components/Storage'
import { MessageManager, Message, MessageType } from 'components/Message'

/**
 * chat class
 *
 * @export
 * @class Chat
 */
export class Chat extends Selector {
  /**
   * storage instance
   *
   * @private
   * @type {Storage}
   * @memberof ChatOverlayerForYouTube
   */
  private storage: Storage

  /**
   * message manager instance
   *
   * @private
   * @type {MessageManager}
   * @memberof ChatOverlayerForYouTube
   */
  private messageManager: MessageManager

  /**
   * overlay mode instance
   *
   * @private
   * @type {OverlayMode}
   * @memberof Chat
   */
  private overlayMode: OverlayMode

  /**
   * Creates an instance of Chat.
   *
   * @memberof Chat
   */
  public constructor() {
    super('body')

    this.storage = new Storage()
    this.messageManager = new MessageManager()
    this.overlayMode = new OverlayMode()

    this.initialize()
  }

  /**
   * initialize
   *
   * @private
   * @memberof ChatOverlayerForYouTube
   */
  private initialize(): void {
    this.refreshOverlayMode()

    this.messageManager.setListener((message: Message) => {
      switch (message.type) {
        case MessageType.SET_OVERLAY_MODE:
          const isOverlayMode: boolean = message.data['isOverlayMode']
          this.changeOverlayMode(isOverlayMode)
          break
        default:
          break
      }
    })
  }

  /**
   * refresh overlay mode
   *
   * @memberof Chat
   */
  public refreshOverlayMode(): void {
    let overlayMode = this.storage.get('overlay-mode')

    if (overlayMode == null) {
      this.changeOverlayMode(true)
      return
    }

    const isOverlayMode = overlayMode == 'true'
    this.changeOverlayMode(isOverlayMode)
  }

  /**
   * change chat overlay mode
   *
   * @param {boolean} isOverlayMode
   * @memberof Chat
   */
  public changeOverlayMode(isOverlayMode: boolean): void {
    this.element.classList.toggle(this.overlayMode.class, isOverlayMode)
  }
}
