import { ChatSelector } from 'app/ChatSelector'
import { FullscreenButtonSelector } from 'app/FullscreenButtonSelector'
import { SizeButtonSelector } from 'app/SizeButtonSelector'
import { MessageManager, Message, MessageType } from 'components/Message'
import { OverlayModeManager, OverlayMode } from 'components/OverlayMode'
import { Selector } from 'components/Selector'
import { Storage } from 'components/Storage'

/**
 * @export
 * @class App
 */
export class App extends Selector {
  /**
   * message manager instance
   *
   * @private
   * @type {MessageManager}
   * @memberof App
   */
  private messageManager: MessageManager

  /**
   * overlay mode manager instance
   *
   * @private
   * @type {OverlayModeManager}
   * @memberof App
   */
  private overlayModeManager: OverlayModeManager

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

    this.messageManager = new MessageManager()
    this.overlayModeManager = new OverlayModeManager(this.htmlElement)
    this.storage = new Storage()

    this.chatSelector = new ChatSelector()
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
    this.overlayModeManager.setMode(OverlayMode.DISABLED)
  }

  /**
   * initialize
   *
   * @private
   * @memberof App
   */
  private initialize(): void {
    this.initializeOverlayMode()
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
   * initialize size listener
   *
   * @private
   * @memberof App
   */
  private initializeSizeListener(): void {
    this.sizeButtonSelector.setOnclick(this.chatSelector.sizeChangeListener)
  }

  /**
   * initialize fullscreen listener
   *
   * @private
   * @memberof App
   */
  private initializeFullscreenListener(): void {
    document.addEventListener('fullscreenchange', (_) => {
      const isFullscreen = !(document.fullscreenElement === null)
      this.chatSelector.setIsFullscreen(isFullscreen)
    });
  }

  /**
   * initialize key listener
   *
   * @private
   * @memberof App
   */
  private initializeKeyListener(): void {
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

      this.keydown(e.keyCode)
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
        case MessageType.KEY_DOWN:
          const keyCode: number = message.data['keyCode']
          this.keydown(keyCode)
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
    const overlayMode = isOverlayMode ? OverlayMode.ENABLED : OverlayMode.DISABLED

    this.overlayModeManager.setMode(overlayMode)
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
   * toggle overlay mode
   *
   * @private
   * @memberof App
   */
  private toggleOverlayMode(): void {
    const message: Message = {
      type: MessageType.SET_OVERLAY_MODE,
      data: {
        isOverlayMode: !this.overlayModeManager.isEnabled
      }
    }
    this.messageManager.send(message)
  }

  /**
   * keydown processor
   *
   * @private
   * @memberof App
   */
  private keydown(keyCode: number): void {
    switch (keyCode) {
      // a
      case 65:
        this.chatSelector.toggleAreaMode()
        break
      // c
      case 67:
        const message: Message = {
          type: MessageType.TOGGLE_CHAT_INPUT_ENABLED,
          data: null
        }
        this.messageManager.send(message)
        break
      // o
      case 79:
        this.toggleOverlayMode()
        break
      // t
      case 84:
        this.chatSelector.sizeChangeListener()
        break
      default:
        break
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
