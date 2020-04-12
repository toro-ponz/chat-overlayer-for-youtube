import { ChatSelector } from 'app/ChatSelector'
import { ChatAppFrameSelector } from 'app/ChatAppFrameSelector'
import { FullscreenButtonSelector } from 'app/FullscreenButtonSelector'
import { SizeButtonSelector } from 'app/SizeButtonSelector'
import { Cookies } from 'components/Cookies'
import { MessageManager, Message, MessageType } from 'components/Message'
import { OverlayMode } from 'components/OverlayMode'
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
   * message manager instance
   *
   * @private
   * @type {MessageManager}
   * @memberof App
   */
  private messageManager: MessageManager

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
   * fullscreen button selector instance
   *
   * @private
   * @type {FullscreenButtonSelector}
   * @memberof App
   */
  private fullscreenButtonSelector: FullscreenButtonSelector

  /**
   * size button selector instance
   *
   * @private
   * @type {SizeButtonSelector}
   * @memberof App
   */
  private sizeButtonSelector: SizeButtonSelector

  /**
   * Creates an instance of App.
   *
   * @memberof App
   */
  public constructor() {
    super('body')

    this.cookies = new Cookies()
    this.messageManager = new MessageManager()
    this.overlayMode = new OverlayMode()
    this.playerModeManager = new PlayerModeManager()
    this.storage = new Storage()

    this.chatSelector = new ChatSelector()
    this.chatAppFrameSelector = new ChatAppFrameSelector()
    this.fullscreenButtonSelector = new FullscreenButtonSelector()
    this.sizeButtonSelector = new SizeButtonSelector()

    this.initialize()
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
   * initialize
   *
   * @private
   * @memberof App
   */
  private initialize(): void {
    this.initializeOverlayMode()
    this.initializePlayerMode()
    this.initializeSizeListener()
    this.initializeFullscreenListener()
    this.initializeKeyListener()
    this.initializeMessageListener()
  }

  /**
   * initialize overlay mode
   *
   * @private
   * @memberof App
   */
  private initializeOverlayMode(): void {
    let overlayMode = this.storage.get('overlay-mode')

    if (overlayMode == null) {
      overlayMode = 'true'
    }

    const isOverlayMode = overlayMode == 'true'
    this.changeOverlayMode(isOverlayMode)
  }

  /**
   * initialize player mode
   *
   * @private
   * @memberof App
   */
  private initializePlayerMode(): void {
    if (this.cookies.isWide) {
      this.chatSelector.setPlayerMode(PlayerMode.THEATER)
    } else {
      this.chatSelector.setPlayerMode(PlayerMode.DEFAULT)
    }
  }

  /**
   * initialize size listener
   *
   * @private
   * @memberof App
   */
  private initializeSizeListener(): void {
    this.sizeButtonSelector.setOnclick(this.sizeChangeListener)
  }

  /**
   * initialize fullscreen listener
   *
   * @private
   * @memberof App
   */
  private initializeFullscreenListener(): void {
    this.fullscreenButtonSelector.setOnclickListener(this.fullscreenChangeListener)
    this.chatSelector.setPlayerOndbclickListener(this.fullscreenChangeListener)
  }

  /**
   * initialize key listener
   *
   * @private
   * @memberof App
   */
  private initializeKeyListener(): void {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      switch (e.keyCode) {
        // a
        case 65:
          this.chatSelector.toggleAreaMode()
          break
        // f
        case 70:
          this.fullscreenChangeListener()
          break
        // t
        case 84:
          this.sizeChangeListener()
          break
        default:
          break
      }
    })
  }

  /**
   * initialize message listener
   *
   * @private
   * @memberof App
   */
  private initializeMessageListener(): void {
    const messageListener = (message: Message) => {
      switch (message.type) {
        case MessageType.SET_OVERLAY_MODE:
          const isOverlayMode: boolean = message.data['isOverlayMode']
          this.changeOverlayMode(isOverlayMode)
          break
        default:
          break
      }
    }
    this.messageManager.setListener(messageListener)
  }

  /**
   * change chat overlay mode
   *
   * @private
   * @param {boolean} isOverlayMode
   * @memberof App
   */
  private changeOverlayMode(isOverlayMode: boolean): void {
    this.element.classList.toggle(this.overlayMode.class, isOverlayMode)
    this.chatAppFrameSelector.changeOverlayMode(this.overlayMode.class, isOverlayMode)
    this.chatSelector.setHeight()
    this.storage.set('overlay-mode', isOverlayMode)

    const message: Message = {
      type: MessageType.UPDATE_ICON,
      data: {
        isOverlayMode: isOverlayMode
      }
    }
    this.messageManager.send(message)
  }

  /**
   * change player size listener
   *
   * @readonly
   * @private
   * @returns {() => void}
   * @memberof App
   */
  private get sizeChangeListener(): () => void {
    return () => {
      if (this.playerModeManager.isDefault) {
        this.chatSelector.setPlayerMode(PlayerMode.THEATER)
      } else {
        this.chatSelector.setPlayerMode(PlayerMode.DEFAULT)
      }
    }
  }

  /**
   * change fullscreen mode listener
   *
   * @readonly
   * @private
   * @returns {() => void}
   * @memberof App
   */
  private get fullscreenChangeListener(): () => void {
    return () => {
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
