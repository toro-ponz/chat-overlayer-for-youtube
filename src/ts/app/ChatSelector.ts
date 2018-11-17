import { PlayerSelector } from 'app/PlayerSelector'
import { Selector } from 'components/Selector'
import { Mode } from 'components/Mode';

/**
 * @export
 * @class ChatSelector
 * @extends {Selector}
 */
export class ChatSelector extends Selector {
  /**
   * mode instance
   *
   * @private
   * @type {Mode}
   * @memberof Chat
   */
  private mode: Mode

  /**
   * player selector instance
   *
   * @private
   * @type {PlayerSelector}
   * @memberof ChatSelector
   */
  private playerSelector: PlayerSelector

  /**
   * Creates an instance of ChatSelector.
   *
   * @memberof ChatSelector
   */
  public constructor() {
    super('ytd-live-chat-frame')

    this.mode = new Mode()
    this.playerSelector = new PlayerSelector()

    this.initialize()
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
   * set height calculate from player height
   *
   * @memberof ChatSelector
   */
  public setHeight(): void {
    // wait change mode by SetTimeout
    // TODO: fix it.
    setTimeout(() => {
      if (!this.mode.isOverlay) {
        this.element.removeAttribute('style')
        return
      }

      const chatHeight = this.playerSelector.height - 45
      const style = `
          max-height: ${chatHeight.toString()}px;
          height: ${chatHeight.toString()}px;
        `
      this.element.setAttribute('style', style)
    }, 500)
  }
}
