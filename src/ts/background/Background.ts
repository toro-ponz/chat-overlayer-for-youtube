import { DeclarativeContent } from 'background/DeclarativeContent'
import { MessageManager, Message, MessageType } from 'components/Message'
import { Page } from 'components/Page'
import { Selector } from 'components/Selector'

/**
 * Background class
 *
 * @export
 * @class Background
 */
export class Background extends Selector {
  /**
   * declarative content instance
   *
   * @private
   * @type {DeclarativeContent}
   * @memberof ChatOverlayerForYouTube
   */
  private declarativeContent: DeclarativeContent

  /**
   * message manager instance
   *
   * @private
   * @type {MessageManager}
   * @memberof ChatOverlayerForYouTube
   */
  private messageManager: MessageManager

  /**
   * page instance
   *
   * @private
   * @type {Page}
   * @memberof Popup
   */
  private page: Page

  /**
   * Creates an instance of Background.
   *
   * @memberof Background
   */
  public constructor() {
    super('body')

    this.declarativeContent = new DeclarativeContent()
    this.messageManager = new MessageManager()
    this.page = new Page()

    this.initialize()
  }

  /**
   * initialize of background
   *
   * @private
   */
  private initialize(): void {
    this.messageManager.setListener((message: Message) => {
      switch (message.type) {
        case MessageType.UPDATE_ICON:
          const isOverlayMode: boolean = message.data['isOverlayMode']
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs: chrome.tabs.Tab[]) => {
            if (tabs[0] == undefined) {
              return
            }
            this.page.updateMode(tabs[0], isOverlayMode, () => {})
          })
          break
        case MessageType.SET_OVERLAY_MODE:
        case MessageType.TOGGLE_CHAT_INPUT_ENABLED:
        case MessageType.KEY_DOWN:
          this.messageManager.sendToActiveTab(message)
          break
        default:
          break
      }
    })

    chrome.action.onClicked.addListener((tab: chrome.tabs.Tab) => {
      this.page.getIsOverlayMode(tab, (isOverlayMode: boolean) => {
        this.sendMessage(!isOverlayMode)
      })
    })
  }

  /**
   * send change overlay mode message
   *
   * @param {boolean} isOverlayMode
   * @memberof Background
   */
  private sendMessage(isOverlayMode: boolean): void {
    const message: Message = {
      type: MessageType.SET_OVERLAY_MODE,
      data: {
        isOverlayMode: isOverlayMode
      }
    }
    this.messageManager.sendToActiveTab(message)
  }
}
