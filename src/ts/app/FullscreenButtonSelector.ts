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
  public setOnclick(callback: () => void): void {
    this.htmlElements.forEach((element) => {
      element.onclick = callback
    })

    window.addEventListener('keydown', (e: KeyboardEvent) => {
      // keycode of [f]
      if (e.keyCode === 70) {
        callback()
      }
    })
  }
}
