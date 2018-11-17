import { Selector } from 'components/Selector'
import { PlayerContainerSelector } from './PlayerContainerSelector';

/**
 * @export
 * @class PlayerSelector
 * @extends {Selector}
 */
export class PlayerSelector extends Selector {
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
}
