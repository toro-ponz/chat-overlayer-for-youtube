import { Selector } from 'components/Selector'

/**
 * @export
 * @class PlayerModeSelector
 * @extends {Selector}
 */
export class PlayerModeSelector extends Selector {
  /**
   * Creates an instance of PlayerModeSelector.
   *
   * @memberof PlayerModeSelector
   */
  public constructor() {
    super('.ytp-size-button')
  }

  /**
   * set onclick event function
   *
   * @param {() => void} callback
   * @returns {boolean}
   * @memberof PlayerModeSelector
   */
  public setOnclick(callback: () => void): boolean {
    const htmlElement = this.element as HTMLElement

    if (htmlElement === null) {
      return false
    }

    htmlElement.onclick = callback
    return true
  }
}
