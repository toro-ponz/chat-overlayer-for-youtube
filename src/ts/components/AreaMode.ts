/**
 * AreaModeManager class
 *
 * @export
 * @class AreaModeManager
 */
export class AreaModeManager {
  /**
   * get is left area mode
   *
   * @readonly
   * @type {boolean}
   * @memberof AreaModeManager
   */
  public get isLeft(): boolean {
    const element = this.element

    if (element === null) {
      return true
    }

    return element.classList.contains(AreaModeClass.LEFT)
  }

  /**
   * get is right area mode
   *
   * @readonly
   * @type {boolean}
   * @memberof AreaModeManager
   */
  public get isRight(): boolean {
    const element = this.element

    if (element === null) {
      return false
    }

    return element.classList.contains(AreaModeClass.RIGHT)
  }

  /**
   * get chat element
   *
   * @readonly
   * @type {HTMLElement|null}
   * @memberof AreaModeManager
   */
  private get element(): HTMLElement|null {
    return document.getElementById('chat')
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
