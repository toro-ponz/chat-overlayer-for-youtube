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
   * @memberof PlayerModeSelector
   */
  public setOnclick(callback: () => void): void {
    this.htmlElements.forEach((element) => {
      element.onclick = callback
    });
  }
}
