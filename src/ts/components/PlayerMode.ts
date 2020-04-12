/**
 * manage PlayerMode class
 *
 * @export
 * @class PlayerMode
 */
export class PlayerMode {
  /**
   * get player is default mode
   *
   * @readonly
   * @type {boolean}
   * @memberof PlayerMode
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
   * @memberof PlayerMode
   */
  public get isTheater(): boolean {
    const element = this.element

    if (element === null) {
      return true
    }

    return element.classList.contains(PlayerModeClass.THEATER)
  }

  /**
   * get player is fullscreen mode
   *
   * @readonly
   * @type {boolean}
   * @memberof PlayerMode
   */
  public get isFullscreen(): boolean {
    const element = this.element

    if (element === null) {
      return true
    }

    return element.classList.contains(PlayerModeClass.FULLSCREEN)
  }

  /**
   * get chat element
   *
   * @readonly
   * @type {HTMLElement|null}
   * @memberof PlayerMode
   */
  private get element(): HTMLElement|null {
    return document.getElementById('chat')
  }
}

/**
 * player mode enum
 *
 * @export
 * @enum PlayerModes
 */
export const enum PlayerModes {
  DEFAULT,
  THEATER,
  FULLSCREEN,
}

/**
 * player mode enum
 *
 * @export
 * @enum PlayerModes
 */
export const enum PlayerModeClass {
  DEFAULT = 'player-default',
  THEATER = 'player-theater',
  FULLSCREEN = 'player-fullscreen',
}
