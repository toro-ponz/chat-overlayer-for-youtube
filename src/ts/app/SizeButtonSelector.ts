import { Selector } from 'components/Selector'

/**
 * @export
 * @class SizeButtonSelector
 * @extends {Selector}
 */
export class SizeButtonSelector extends Selector {
  /**
   * Creates an instance of SizeButtonSelector.
   *
   * @memberof SizeButtonSelector
   */
  public constructor() {
    super('.ytp-size-button')
  }

  /**
   * set onclick event function
   *
   * @param {() => void} callback
   * @memberof SizeButtonSelector
   */
  public setOnclick(callback: () => void): void {
    this.htmlElements.forEach((element) => {
      element.onclick = callback
    })

    window.addEventListener('keydown', (e: KeyboardEvent) => {
      // keycode of [t]
      if (e.keyCode === 84) {
        callback()
      }
    })
  }
}
