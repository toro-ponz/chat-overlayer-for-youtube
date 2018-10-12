import { Selector } from 'components/Selector'

/**
 * @export
 * @class ChatAppSelector
 * @extends {Selector}
 */
export class ChatAppSelector extends Selector {
  /**
   * class name attaches when overlay mode enabled
   *
   * @private
   * @type {string}
   * @memberof ChatAppSelector
   */
  private overlayClass: string = 'overlay-mode'

  /**
   * current document
   *
   * @private
   * @type {(Document | null)}
   * @memberof ChatAppSelector
   */
  private document: Document | null

  /**
   * Creates an instance of ChatAppSelector.
   *
   * @param {(Document | null)} [document=null]
   * @memberof ChatAppSelector
   */
  public constructor(document: Document | null = null) {
    super('yt-live-chat-app')
    this.document = document
  }

  /**
   * get element with query selector
   *
   * @readonly
   * @memberof ChatAppSelector
   */
  public get element() {
    const d = this.document ? this.document : document;

    const element = d.querySelector(this.query)

    if (element === null) {
      throw new Error('DOM not found with selector.');
    }

    return element
  }

  /**
   * get chat window is overlay mode
   *
   * @readonly
   * @private
   * @type {boolean}
   * @memberof ChatAppSelector
   */
  private get isOverlayMode(): boolean {
    return this.element.classList.contains(this.overlayClass)
  }

  /**
   * change chat overlay mode
   *
   * @param {boolean} isOverlayMode
   * @memberof ChatAppSelector
   */
  public changeMode(isOverlayMode: boolean): void {
    this.element.classList.toggle(this.overlayClass, isOverlayMode)
  }

  /**
   * toggle chat overlay mode
   *
   * @memberof ChatAppSelector
   */
  public toggleMode(): void {
    this.changeMode(!this.isOverlayMode)
  }
}
