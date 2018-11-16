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
