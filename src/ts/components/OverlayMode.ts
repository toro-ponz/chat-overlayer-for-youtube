/**
 * manage OverlayModeManager class
 *
 * @export
 * @class OverlayModeManager
 */
export class OverlayModeManager {
  /**
   * target element
   *
   * @private
   * @type {HTMLElement}
   * @memberof PlayerModeManager
   */
  private element: HTMLElement

  /**
   * Creates an instance of PlayerModeManager.
   *
   * @param {HTMLElement} element
   * @memberof PlayerModeManager
   */
  public constructor(element: HTMLElement) {
    this.element = element
  }

  /**
   * set overlay mode
   *
   * @memberof OverlayModeManager
   */
  public setMode(overlayMode: OverlayMode): void {
    switch (overlayMode) {
      case OverlayMode.ENABLED:
        this.element.classList.add(OverlayModeClass.ENABLED)
        this.element.classList.remove(OverlayModeClass.DISABLED)
        break
      case OverlayMode.DISABLED:
        this.element.classList.remove(OverlayModeClass.ENABLED)
        this.element.classList.add(OverlayModeClass.DISABLED)
        break
      default:
        break
    }
  }

  /**
   * toggle overlay mode
   *
   * @memberof OverlayModeManager
   */
  public toggleMode(): void {
    if (this.isEnabled) {
      this.setMode(OverlayMode.DISABLED)
    } else {
      this.setMode(OverlayMode.ENABLED)
    }
  }

  /**
   * get is overlay mode
   *
   * @readonly
   * @type {boolean}
   * @memberof OverlayModeManager
   */
  public get isEnabled(): boolean {
    return this.element.classList.contains(OverlayModeClass.ENABLED)
  }
}

/**
 * overlay mode enum
 *
 * @export
 * @enum OverlayMode
 */
export const enum OverlayMode {
  ENABLED,
  DISABLED,
}

/**
 * overlay mode class enum
 *
 * @export
 * @enum OverlayModeClass
 */
export const enum OverlayModeClass {
  ENABLED = 'overlay-mode',
  DISABLED = 'default-mode',
}
