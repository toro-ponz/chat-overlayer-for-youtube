import { Cookies } from 'components/Cookies'
import { Selector } from 'components/Selector';
import { Mode } from 'components/Mode';

/**
 * @export
 * @class Chat
 */
export class Chat extends Selector {
  /**
   * cookies instance
   *
   * @private
   * @type {Cookies}
   * @memberof Chat
   */
  private cookies: Cookies

  /**
   * mode instance
   *
   * @private
   * @type {Mode}
   * @memberof Chat
   */
  private mode: Mode

  /**
   * Creates an instance of Chat.
   *
   * @memberof Chat
   */
  public constructor() {
    super('body')

    this.cookies = new Cookies()
    this.mode = new Mode()

    this.changeMode(this.cookies.isWide)
  }

  /**
   * change chat overlay mode
   *
   * @param {boolean} isOverlayMode
   * @memberof Chat
   */
  public changeMode(isOverlayMode: boolean): void {
    this.element.classList.toggle(this.mode.class, isOverlayMode)
  }

  /**
   * toggle chat overlay mode
   *
   * @memberof Chat
   */
  public toggleMode(): void {
    this.changeMode(!this.mode.isOverlay)
  }
}
