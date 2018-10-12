import { PlayerSelector } from 'app/PlayerSelector'
import { Selector } from 'components/Selector'

/**
 * @export
 * @class ChatSelector
 * @extends {Selector}
 */
export class ChatSelector extends Selector {
  /**
   * class name attaches when overlay mode enabled
   *
   * @private
   * @type {string}
   * @memberof ChatSelector
   */
  private overlayClass: string = 'overlay-mode'

  /**
   * player selector instance
   *
   * @private
   * @type {PlayerSelector}
   * @memberof YouTubeLiveOverlayer
   */
  private playerSelector: PlayerSelector

  /**
   * Creates an instance of ChatSelector.
   *
   * @memberof ChatSelector
   */
  public constructor() {
    super('ytd-live-chat-frame')
    this.playerSelector = new PlayerSelector()

    this.initialize()
  }

  /**
   * get chat window is overlay mode
   *
   * @readonly
   * @private
   * @type {boolean}
   * @memberof ChatSelector
   */
  private get isOverlayMode(): boolean {
    return this.element.classList.contains(this.overlayClass)
  }

  /**
   * initialize
   *
   * @private
   * @memberof ChatSelector
   */
  private initialize(): void {
    window.onresize = () => {
      this.setHeight()
    }
  }

  /**
   * change chat overlay mode
   *
   * @param {boolean} isOverlayMode
   * @memberof ChatSelector
   */
  public changeMode(isOverlayMode: boolean): void {
    this.element.classList.toggle(this.overlayClass, isOverlayMode)
    this.setHeight()
  }

  /**
   * toggle chat overlay mode
   *
   * @memberof ChatSelector
   */
  public toggleMode(): void {
    this.changeMode(!this.isOverlayMode)
  }

  /**
   * set height calculate from player height
   *
   * @memberof ChatSelector
   */
  public setHeight(): void {
    // wait change mode by SetTimeout
    // TODO: fix it.
    setTimeout(() => {
      if (this.isOverlayMode) {
        const height = this.playerSelector.height - 30
        this.element.setAttribute('style', `height: ${height.toString()}px;`)
        return
      }

      this.element.removeAttribute('style')
    }, 500)
  }
}
