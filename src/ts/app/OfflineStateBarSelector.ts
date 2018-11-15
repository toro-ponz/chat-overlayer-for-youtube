import { Selector } from 'components/Selector'

/**
 * @export
 * @class OfflineStateBarSelector
 * @extends {Selector}
 */
export class OfflineStateBarSelector extends Selector {
  /**
   * class name attaches when overlay mode enabled
   *
   * @private
   * @type {string}
   * @memberof OfflineStateBarSelector
   */
  private overlayClass: string = 'overlay-mode'

  /**
   * Creates an instance of OfflineStateBarSelector.
   *
   * @memberof OfflineStateBarSelector
   */
  public constructor() {
    super('.ytp-offline-slate-bar')
  }

  /**
   * get chat window is overlay mode
   *
   * @readonly
   * @private
   * @type {boolean}
   * @memberof OfflineStateBarSelector
   */
  private get isOverlayMode(): boolean {
    return this.element.classList.contains(this.overlayClass)
  }

  /**
   * change chat overlay mode
   *
   * @param {boolean} isOverlayMode
   * @memberof OfflineStateBarSelector
   */
  public changeMode(isOverlayMode: boolean): void {
    this.element.classList.toggle(this.overlayClass, isOverlayMode)
  }

  /**
   * toggle chat overlay mode
   *
   * @memberof OfflineStateBarSelector
   */
  public toggleMode(): void {
    this.changeMode(!this.isOverlayMode)
  }
}
