/**
 * manage cookie class
 *
 * @export
 * @class Cookies
 */
export class Cookies {
  /**
   * all cookies
   *
   * @private
   * @type {Array<{ key: string, value: string }>}
   * @memberof Cookies
   */
  private cookies: Array<{ key: string, value: string }>

  /**
   * Creates an instance of Cookies.
   *
   * @memberof Cookies
   */
  public constructor() {
    this.cookies = this.getCookies()
  }

  public get isWide() {
    return this.getValue('wide') === '1'
  }

  /**
   * get cookie with name
   *
   * @param {string} name
   * @returns {string}
   * @memberof Cookies
   */
  public getValue(name: string): string {
    const cookie = this.cookies.filter((cookie) => {
      return cookie.key === name
    })[0]

    return cookie ? cookie.value : ''
  }

  /**
   * reload cookies
   *
   * @memberof Cookies
   */
  public update(): void {
    this.cookies = this.getCookies()
  }

  /**
   * get all cookies array
   *
   * @private
   * @returns {Array<{ key: string, value: string }>}
   * @memberof Cookies
   */
  private getCookies(): Array<{ key: string, value: string }> {
    const cookies = document.cookie.split('; ');

    return cookies.map((cookie) => {
      return {
        key: cookie.split('=')[0],
        value: cookie.split('=')[1],
      }
    })
  }
}
