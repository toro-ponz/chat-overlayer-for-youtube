import { Selector } from 'components/Selector'
import { ChatAppSelector } from 'chat/ChatAppSelector'

/**
 * @export
 * @class ChatAppFrameSelector
 * @extends {Selector}
 */
export class ChatAppFrameSelector extends Selector {
  /**
   * Creates an instance of ChatAppFrameSelector.
   *
   * @memberof ChatAppFrameSelector
   */
  public constructor() {
    super('iframe#chatframe')
  }

  /**
   * get iframe element
   *
   * @readonly
   * @type {HTMLIFrameElement}
   * @memberof ChatAppFrameSelector
   */
  public get element(): HTMLIFrameElement {
    const element = document.querySelector(this.query) as HTMLIFrameElement;

    if (element === null) {
      throw new Error('DOM is not HTMLframeElement')
    }

    return element
  }

  /**
   * get document inner iframe
   *
   * @readonly
   * @type {Document}
   * @memberof ChatAppFrameSelector
   */
  public get innerDocument(): Document {
    const frame = this.element

    if (frame.contentWindow === null || frame.contentWindow.document === null) {
      throw new Error('document not found.')
    }

    return frame.contentWindow.document
  }

  /**
   * get inner chat app selector instance
   *
   * @readonly
   * @type {ChatAppSelector}
   * @memberof ChatAppFrameSelector
   */
  public get chatAppSelector(): ChatAppSelector {
    return new ChatAppSelector(this.innerDocument)
  }
}
