import { Selector } from 'components/Selector'
import { OverlayMode, OverlayModeManager } from 'components/OverlayMode'
import { Storage } from 'components/Storage'
import { MessageManager, Message, MessageType } from 'components/Message'
import { ChatInputAreaSelector } from './ChatInputAreaSelector'

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
   * overlay mode manager instance
   *
   * @private
   * @type {OverlayModeManager}
   * @memberof Chat
   */
  private overlayModeManager: OverlayModeManager

  /**
   * chat input area selector instance
   *
   * @private
   * @type {ChatInputAreaSelector}
   * @memberof Chat
   */
  private chatInputAreaSelector: ChatInputAreaSelector

  /**
   * Creates an instance of Chat.
   *
   * @memberof Chat
   */
  public constructor() {
    super('body')

    this.storage = new Storage()
    this.messageManager = new MessageManager()
    this.overlayModeManager = new OverlayModeManager(this.htmlElement)

    this.chatInputAreaSelector = new ChatInputAreaSelector()

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
    this.initializeKeyListener()
    this.initializeMessageListener()
  }

  /**
   * initialize key listener
   *
   * @private
   * @memberof Chat
   */
  private initializeKeyListener(): void {
    // TODO: block event that sent from textarea for chat.

    window.addEventListener('keydown', (e: KeyboardEvent) => {
      const ignoreTagList = ['textarea', 'input']

      if (e.target == null) {
        return
      }

      let element: Element|null = null
      try {
        element = e.target as HTMLElement
      } catch (e) {
        console.debug(e)
        return
      }

      if (!e.altKey) {
        if (ignoreTagList.includes(element.tagName.toLowerCase())) {
          return
        }
        if (ignoreTagList.includes(element.id.toLowerCase())) {
          return
        }
      }

      const message: Message = {
        type: MessageType.KEY_DOWN,
        data: {
          keyCode: e.keyCode
        }
      }
      this.messageManager.send(message)
    })
  }

  /**
   * initialize message listener
   *
   * @private
   * @memberof Chat
   */
  private initializeMessageListener(): void {
    this.messageManager.setListener((message: Message) => {
      switch (message.type) {
        case MessageType.SET_OVERLAY_MODE:
          const isOverlayMode: boolean = message.data['isOverlayMode']
          this.changeOverlayMode(isOverlayMode)
          break
        case MessageType.TOGGLE_CHAT_INPUT_ENABLED:
          this.chatInputAreaSelector.toggleShow()
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
    let overlayModeManager = this.storage.get('overlay-mode')

    if (overlayModeManager == null) {
      this.changeOverlayMode(true)
      return
    }

    const isOverlayMode = overlayModeManager == 'true'
    this.changeOverlayMode(isOverlayMode)
  }

  /**
   * change chat overlay mode
   *
   * @private
   * @param {boolean} isOverlayMode
   * @memberof Chat
   */
  private changeOverlayMode(isOverlayMode: boolean): void {
    const overlayMode = isOverlayMode ? OverlayMode.ENABLED : OverlayMode.DISABLED
    this.overlayModeManager.setMode(overlayMode)
  }
}
