/**
 * manage Mode class
 *
 * @export
 * @class Mode
 */
export class Mode {
  /**
   * class name attaches when overlay mode enabled
   *
   * @private
   * @type {string}
   * @memberof Mode
   */
  private overlayClass: string = 'overlay-mode'

  /**
   * get chat window is overlay mode
   *
   * @readonly
   * @type {boolean}
   * @memberof Mode
   */
  public get isOverlay(): boolean {
    return document.body.classList.contains(this.overlayClass)
  }

  /**
   * get overlay class
   *
   * @readonly
   * @type {string}
   * @memberof Mode
   */
  public get class(): string {
    return this.overlayClass
  }
}
