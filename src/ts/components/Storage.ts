/**
 * manage storage class
 *
 * @class Storage
 */
export class Storage {
  /**
   * storage key prefix
   */
  private keyPrefix: string = 'chat-overlayer-for-youtube-'

  /**
   * get item by key
   *
   * @param {string} key
   * @return {any}
   * @memberof Storage
   */
  public get(key: string): any {
    return window.localStorage.getItem(this.keyPrefix + key)
  }

  /**
   * set item by key
   *
   * @param {string} key
   * @param {any} item
   * @memberof Storage
   */
  public set(key: string, item: any): void {
    window.localStorage.setItem(this.keyPrefix + key, item)
  }
}
