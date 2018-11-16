import { Cookies } from 'components/Cookies'
import { Selector } from 'components/Selector';

/**
 * @export
 * @class Chat
 */
export class Chat extends Selector {
  /**
   * class name attaches when overlay mode enabled
   *
   * @private
   * @type {string}
   * @memberof ChatSelector
   */
  private overlayClass: string = 'overlay-mode'

  /**
   * cookies instance
   *
   * @private
   * @type {Cookies}
   * @memberof Chat
   */
  private cookies: Cookies

  /**
   * Creates an instance of Chat.
   *
   * @memberof Chat
   */
  public constructor() {
    super('body')

    this.cookies = new Cookies()

    this.changeMode(this.cookies.isWide)
  }

  /**
   * get chat window is overlay mode
   *
   * @readonly
   * @private
   * @type {boolean}
   * @memberof Chat
   */
  private get isOverlayMode(): boolean {
    return this.element.classList.contains(this.overlayClass)
  }

  /**
   * change chat overlay mode
   *
   * @param {boolean} isOverlayMode
   * @memberof Chat
   */
  public changeMode(isOverlayMode: boolean): void {
    this.element.classList.toggle(this.overlayClass, isOverlayMode)
  }

  /**
   * toggle chat overlay mode
   *
   * @memberof Chat
   */
  public toggleMode(): void {
    this.changeMode(!this.isOverlayMode)
  }
}
