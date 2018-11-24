/**
 * DOM selector abstract class
 *
 * @export
 * @class Selector
 */
export abstract class Selector {
  /**
   * dom query selector
   *
   * @protected
   * @type {string}
   * @memberof Selector
   */
  protected query: string;

  /**
   * Creates an instance of Selector.
   *
   * @param {string} selector
   * @memberof Selector
   */
  public constructor(query: string) {
    this.query = query
  }

  /**
   * get element with query selector
   *
   * @readonly
   * @type {Element}
   * @memberof Selector
   */
  public get element(): Element {
    const element = document.querySelector(this.query)

    if (element === null) {
      throw new Error('DOM not found with selector.' + this.query);
    }

    return element
  }

  /**
   * get all elements with query selector
   *
   * @readonly
   * @type {NodeListOf<Element>}
   * @memberof Selector
   */
  public get elements(): NodeListOf<Element> {
    return document.querySelectorAll(this.query)
  }

  /**
   * get html element with query selector
   *
   * @readonly
   * @type {HTMLElement}
   * @memberof Selector
   */
  public get htmlElement(): HTMLElement {
    const htmlElement = this.element as HTMLElement

    if (htmlElement === null) {
      throw new Error('DOM is not HTMLElement.');
    }

    return htmlElement
  }

  /**
   * get all html elements with query selector
   *
   * @readonly
   * @type {NodeListOf<Element>}
   * @memberof Selector
   */
  public get htmlElements(): NodeListOf<HTMLElement> {
    return document.querySelectorAll(this.query)
  }

  /**
   * DOM generated or not found
   *
   * @returns {boolean}
   * @memberof Selector
   */
  public isGenerated(): boolean {
    const element = document.querySelector(this.query)

    return element !== null
  }
}
