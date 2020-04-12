import { ChatSelector } from 'app/ChatSelector'
import { ChatAppFrameSelector } from 'app/ChatAppFrameSelector'
import { FullscreenButtonSelector } from 'app/FullscreenButtonSelector'
import { SizeButtonSelector } from 'app/SizeButtonSelector'
import { Cookies } from 'components/Cookies'
import { MessageManager, Message, MessageType } from 'components/Message'
import { OverlayMode } from 'components/OverlayMode'
import { Page } from 'components/Page'
import { PlayerMode, PlayerModeManager } from 'components/PlayerMode'
import { Selector } from 'components/Selector'
import { Storage } from 'components/Storage'

/**
 * @export
 * @class App
 */
export class App extends Selector {
  /**
   * cookies instance
   *
   * @private
   * @type {Cookies}
   * @memberof App
   */
  private cookies: Cookies

  /**
   * overlay mode instance
   *
   * @private
   * @type {OverlayMode}
   * @memberof App
   */
  private overlayMode: OverlayMode

  /**
   * player mode instance
   *
   * @private
   * @type {PlayerMode}
   * @memberof App
   */
  private playerModeManager: PlayerModeManager

  /**
   * storage instance
   *
   * @private
   * @type {Storage}
   * @memberof App
   */
  private storage: Storage

  /**
   * message manager instance
   *
   * @private
   * @type {MessageManager}
   * @memberof App
   */
  private messageManager: MessageManager

  /**
   * page instance
   *
   * @private
   * @type {Page}
   * @memberof App
   */
  private page: Page

  /**
   * chat selector instance
   *
   * @private
   * @type {ChatSelector}
   * @memberof App
   */
  private chatSelector: ChatSelector

  /**
   * chat app frame selector instance
   *
   * @private
   * @type {ChatAppFrameSelector}
   * @memberof App
   */
  private chatAppFrameSelector: ChatAppFrameSelector

  /**
   * size button selector instance
   *
   * @private
   * @type {SizeButtonSelector}
   * @memberof App
   */
  private sizeButtonSelector: SizeButtonSelector

  /**
   * fullscreen button selector instance
   *
   * @private
   * @type {FullscreenButtonSelector}
   * @memberof App
   */
  private fullscreenButtonSelector: FullscreenButtonSelector

  /**
   * Creates an instance of App.
   *
   * @memberof App
   */
  public constructor() {
    super('body')

    this.cookies = new Cookies()
    this.overlayMode = new OverlayMode()
    this.page = new Page()
    this.playerModeManager = new PlayerModeManager()
    this.storage = new Storage()
    this.messageManager = new MessageManager()

    this.chatSelector = new ChatSelector()
    this.chatAppFrameSelector = new ChatAppFrameSelector()
    this.sizeButtonSelector = new SizeButtonSelector()
    this.fullscreenButtonSelector = new FullscreenButtonSelector()

    const sizeChangeFunction = () => {
      if (this.playerModeManager.isDefault) {
        this.chatSelector.setPlayerMode(PlayerMode.THEATER)
      } else {
        this.chatSelector.setPlayerMode(PlayerMode.DEFAULT)
      }
    }
    const fullscreenChangeFunction = () => {
      if (this.playerModeManager.isFullscreen) {
        this.cookies.update()
        console.log(this.cookies.isWide)
        if (this.cookies.isWide) {
          this.chatSelector.setPlayerMode(PlayerMode.THEATER)
        } else {
          this.chatSelector.setPlayerMode(PlayerMode.DEFAULT)
        }
      } else {
        this.chatSelector.setPlayerMode(PlayerMode.FULLSCREEN)
      }
    }
    this.sizeButtonSelector.setOnclick(sizeChangeFunction)
    this.fullscreenButtonSelector.setOnclick(fullscreenChangeFunction)
    this.chatSelector.setPlayerOndbclick(fullscreenChangeFunction)

    this.initialize()
  }

  /**
   * initialize
   *
   * @private
   * @memberof App
   */
  private initialize(): void {
    this.refreshOverlayMode()

    if (this.cookies.isWide) {
      this.chatSelector.setPlayerMode(PlayerMode.THEATER)
    } else {
      this.chatSelector.setPlayerMode(PlayerMode.DEFAULT)
    }

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
   * @private
   * @memberof App
   */
  private refreshOverlayMode(): void {
    let overlayMode = this.storage.get('overlay-mode')

    if (overlayMode == null) {
      overlayMode = 'true'
    }

    const isOverlayMode = overlayMode == 'true'
    this.changeOverlayMode(isOverlayMode)

    const message: Message = {
      type: MessageType.UPDATE_ICON,
      data: {
        isOverlayMode: isOverlayMode
      }
    }
    this.messageManager.send(message)
  }

  /**
   * dispose attached element
   *
   * @memberof App
   */
  public dispose(): void {
    this.element.classList.toggle(this.overlayMode.class, false)
  }

  /**
   * change chat overlay mode
   *
   * @param {boolean} isOverlayMode
   * @memberof App
   */
  public changeOverlayMode(isOverlayMode: boolean): void {
    this.element.classList.toggle(this.overlayMode.class, isOverlayMode)
    this.chatAppFrameSelector.changeOverlayMode(this.overlayMode.class, isOverlayMode)
    this.chatSelector.setHeight()
    this.storage.set('overlay-mode', isOverlayMode)
  }

  /**
   * try new instance
   *
   * @static
   * @returns {(App | null)}
   * @memberof App
   */
  public static tryNew(): App | null {
    try {
      return new App()
    } catch(error) {
      return null
    }
  }
}
