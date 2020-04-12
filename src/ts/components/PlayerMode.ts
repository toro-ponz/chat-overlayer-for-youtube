/**
 * PlayerModeManager class
 *
 * @export
 * @class PlayerModeManager
 */
export class PlayerModeManager {
  /**
   * get player is default mode
   *
   * @readonly
   * @type {boolean}
   * @memberof PlayerModeManager
   */
  public get isDefault(): boolean {
    const element = this.element

    if (element === null) {
      return true
    }

    return element.classList.contains(PlayerModeClass.DEFAULT)
  }

  /**
   * get player is theater mode
   *
   * @readonly
   * @type {boolean}
   * @memberof PlayerModeManager
   */
  public get isTheater(): boolean {
    const element = this.element

    if (element === null) {
      return false
    }

    return element.classList.contains(PlayerModeClass.THEATER)
  }

  /**
   * get player is fullscreen mode
   *
   * @readonly
   * @type {boolean}
   * @memberof PlayerModeManager
   */
  public get isFullscreen(): boolean {
    const element = this.element

    if (element === null) {
      return false
    }

    return element.classList.contains(PlayerModeClass.FULLSCREEN)
  }

  /**
   * get chat element
   *
   * @readonly
   * @type {HTMLElement|null}
   * @memberof PlayerModeManager
   */
  private get element(): HTMLElement|null {
    return document.getElementById('chat')
  }
}

/**
 * player mode enum
 *
 * @export
 * @enum PlayerMode
 */
export const enum PlayerMode {
  DEFAULT,
  THEATER,
  FULLSCREEN,
}

/**
 * player mode enum
 *
 * @export
 * @enum PlayerModeClass
 */
export const enum PlayerModeClass {
  DEFAULT = 'player-default',
  THEATER = 'player-theater',
  FULLSCREEN = 'player-fullscreen',
}
