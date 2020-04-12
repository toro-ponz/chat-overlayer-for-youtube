import { Selector } from 'components/Selector'

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
   * change overlay mode
   *
   * @param {string} overlayClass
   * @param {boolean} isOverlayMode
   * @memberof ChatAppFrameSelector
   */
  public changeOverlayMode(overlayClass: string, isOverlayMode: boolean): void {
    this.innerDocument.body.classList.toggle(overlayClass, isOverlayMode)
  }

  /**
   * get iframe element
   *
   * @private
   * @readonly
   * @type {HTMLIFrameElement}
   * @memberof ChatAppFrameSelector
   */
  private get iframe(): HTMLIFrameElement {
    const iframe = document.querySelector(this.query) as HTMLIFrameElement;

    if (iframe === null) {
      throw new Error('DOM is not HTMLframeElement')
    }

    return iframe
  }

  /**
   * get document inner iframe
   *
   * @private
   * @readonly
   * @type {Document}
   * @memberof ChatAppFrameSelector
   */
  private get innerDocument(): Document {
    const frame = this.iframe

    if (frame.contentWindow === null || frame.contentWindow.document === null) {
      throw new Error('document not found.')
    }

    return frame.contentWindow.document
  }
}
