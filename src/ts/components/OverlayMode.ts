/**
 * manage OverlayMode class
 *
 * @export
 * @class OverlayMode
 */
export class OverlayMode {
  /**
   * class name attaches when overlay mode enabled
   *
   * @private
   * @type {string}
   * @memberof OverlayMode
   */
  private overlayClass: string = 'overlay-mode'

  /**
   * get chat window is overlay mode
   *
   * @readonly
   * @type {boolean}
   * @memberof OverlayMode
   */
  public get isOverlay(): boolean {
    return document.body.classList.contains(this.overlayClass)
  }

  /**
   * get overlay class
   *
   * @readonly
   * @type {string}
   * @memberof OverlayMode
   */
  public get class(): string {
    return this.overlayClass
  }
}
