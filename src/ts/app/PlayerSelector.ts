import { Selector } from 'components/Selector'
import { PlayerContainerSelector } from './PlayerContainerSelector';

/**
 * @export
 * @class PlayerSelector
 * @extends {Selector}
 */
export class PlayerSelector extends Selector {
  /**
   * player container selector instance
   *
   * @private
   * @type {PlayerContainerSelector}
   * @memberof PlayerSelector
   */
  private playerContainerSelector: PlayerContainerSelector

  /**
   * Creates an instance of PlayerSelector.
   *
   * @memberof PlayerSelector
   */
  public constructor() {
    super('.html5-main-video')

    this.playerContainerSelector = new PlayerContainerSelector()
  }

  /**
   * get player height
   *
   * @readonly
   * @type {number}
   * @memberof PlayerSelector
   */
  public get height() : number {
    return this.playerContainerSelector.htmlElement.clientHeight
  }

  /**
   * set ondbclick event function
   *
   * @param {() => void} callback
   * @memberof PlayerSelector
   */
  public setOndbclickListener(listener: () => void): void {
    this.htmlElements.forEach((element) => {
      element.addEventListener('dblclick', listener)
    })
  }
}
