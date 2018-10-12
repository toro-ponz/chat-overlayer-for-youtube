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
   * Creates an instance of ChatSelector.
   *
   * @memberof ChatSelector
   */
  public constructor() {
    super('ytd-live-chat-frame')
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
   * change chat overlay mode
   *
   * @param {boolean} isOverlayMode
   * @memberof ChatSelector
   */
  public changeMode(isOverlayMode: boolean): void {
    this.element.classList.toggle(this.overlayClass, isOverlayMode)
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
   * set chat window height
   *
   * @param {number} height
   * @memberof ChatSelector
   */
  public setHeight(height: number): void {
    this.element.setAttribute('style', `height: ${height.toString()}px;`)
  }
}
