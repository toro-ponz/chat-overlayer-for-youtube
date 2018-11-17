import { Selector } from "components/Selector";

/**
 * @export
 * @class PlayerContainerSelector
 * @extends {Selector}
 */
export class PlayerContainerSelector extends Selector {
  /**
   * Creates an instance of PlayerContainerSelector.
   *
   * @memberof PlayerContainerSelector
   */
  constructor() {
    super('.html5-video-player')
  }
}
