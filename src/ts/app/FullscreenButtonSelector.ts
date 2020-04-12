import { Selector } from 'components/Selector'

/**
 * @export
 * @class FullscreenButtonSelector
 * @extends {Selector}
 */
export class FullscreenButtonSelector extends Selector {
  /**
   * Creates an instance of FullscreenButtonSelector.
   *
   * @memberof FullscreenButtonSelector
   */
  public constructor() {
    super('.ytp-fullscreen-button')
  }

  /**
   * set onclick event function
   *
   * @param {() => void} callback
   * @memberof FullscreenButtonSelector
   */
  public setOnclickListener(listener: () => void): void {
    this.htmlElements.forEach((element) => {
      element.addEventListener('onclick', listener)
    })
  }
}
