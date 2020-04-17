/**
 * AreaModeManager class
 *
 * @export
 * @class AreaModeManager
 */
export class AreaModeManager {
  /**
   * target element
   *
   * @private
   * @type {HTMLElement}
   * @memberof AreaModeManager
   */
  private element: HTMLElement

  /**
   * Creates an instance of AreaModeManager.
   *
   * @param {HTMLElement} element
   * @memberof AreaModeManager
   */
  public constructor(element: HTMLElement, defaultMode: AreaMode = AreaMode.LEFT) {
    this.element = element
    this.setMode(defaultMode)
  }

  /**
   * set area mode class
   *
   * @param areaMode
   * @memberof AreaModeManager
   */
  public setMode(areaMode: AreaMode): void {
    switch (areaMode) {
      case AreaMode.LEFT:
        this.element.classList.add(AreaModeClass.LEFT)
        this.element.classList.remove(AreaModeClass.RIGHT)
        break
      case AreaMode.RIGHT:
        this.element.classList.remove(AreaModeClass.LEFT)
        this.element.classList.add(AreaModeClass.RIGHT)
        break
      default:
        break
    }
  }

  /**
   * toggle area mode class
   *
   * @memberof AreaModeManager
   */
  public toggleMode(): void {
    if (this.isLeft) {
      this.setMode(AreaMode.RIGHT)
    } else if (this.isRight) {
      this.setMode(AreaMode.LEFT)
    }
  }

  /**
   * get is left area mode
   *
   * @readonly
   * @type {boolean}
   * @memberof AreaModeManager
   */
  public get isLeft(): boolean {
    return this.element.classList.contains(AreaModeClass.LEFT)
  }

  /**
   * get is right area mode
   *
   * @readonly
   * @type {boolean}
   * @memberof AreaModeManager
   */
  public get isRight(): boolean {
    return this.element.classList.contains(AreaModeClass.RIGHT)
  }
}

/**
 * area mode enum
 *
 * @export
 * @enum AreaMode
 */
export const enum AreaMode {
  LEFT,
  RIGHT,
}

/**
 * area mode enum
 *
 * @export
 * @enum AreaModeClass
 */
export const enum AreaModeClass {
  LEFT = 'overlay-left',
  RIGHT = 'overlay-right',
}
