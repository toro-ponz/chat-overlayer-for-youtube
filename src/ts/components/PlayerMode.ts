/**
 * PlayerModeManager class
 *
 * @export
 * @class PlayerModeManager
 */
export class PlayerModeManager {
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
  public constructor(element: HTMLElement, defaultMode: PlayerMode = PlayerMode.DEFAULT) {
    this.element = element
    this.setMode(defaultMode)
  }

  /**
   * set player mode class
   *
   * @param playerMode player mode instance
   * @memberof PlayerModeManager
   */
  public setMode(playerMode: PlayerMode): void {
    switch (playerMode) {
      case PlayerMode.DEFAULT:
        this.element.classList.add(PlayerModeClass.DEFAULT)
        this.element.classList.remove(PlayerModeClass.THEATER)
        this.element.classList.remove(PlayerModeClass.FULLSCREEN)
        break
      case PlayerMode.THEATER:
        this.element.classList.remove(PlayerModeClass.DEFAULT)
        this.element.classList.add(PlayerModeClass.THEATER)
        this.element.classList.remove(PlayerModeClass.FULLSCREEN)
        break
      case PlayerMode.FULLSCREEN:
        this.element.classList.add(PlayerModeClass.FULLSCREEN)
        break
      default:
        break
    }
  }

  /**
   * get player is default mode
   *
   * @readonly
   * @type {boolean}
   * @memberof PlayerModeManager
   */
  public get isDefault(): boolean {
    return this.element.classList.contains(PlayerModeClass.DEFAULT)
  }

  /**
   * get player is theater mode
   *
   * @readonly
   * @type {boolean}
   * @memberof PlayerModeManager
   */
  public get isTheater(): boolean {
    return this.element.classList.contains(PlayerModeClass.THEATER)
  }

  /**
   * get player is fullscreen mode
   *
   * @readonly
   * @type {boolean}
   * @memberof PlayerModeManager
   */
  public get isFullscreen(): boolean {
    return this.element.classList.contains(PlayerModeClass.FULLSCREEN)
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
