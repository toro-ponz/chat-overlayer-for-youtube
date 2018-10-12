import { Selector } from 'components/Selector'

/**
 * @export
 * @class PlayerSelector
 * @extends {Selector}
 */
export class PlayerSelector extends Selector {
  /**
   * Creates an instance of PlayerSelector.
   *
   * @memberof PlayerSelector
   */
  public constructor() {
    super('.html5-video-player')
  }

  /**
   * get player height
   *
   * @readonly
   * @type {number}
   * @memberof PlayerSelector
   */
  public get height() : number {
    return this.htmlElement.clientHeight
  }
}
