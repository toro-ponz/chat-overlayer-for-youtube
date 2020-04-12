import { AreaMode, AreaModeClass, AreaModeManager } from 'components/AreaMode'
import { PlayerMode, PlayerModeClass, PlayerModeManager } from 'components/PlayerMode'
import { PlayerSelector } from 'app/PlayerSelector'
import { Selector } from 'components/Selector'

/**
 * @export
 * @class ChatSelector
 * @extends {Selector}
 */
export class ChatSelector extends Selector {
  /**
  * area mode manager instance
  *
  * @private
  * @type {AreaModeManager}
  * @memberof ChatSelector
  */
 private areaModeManager: AreaModeManager

 /**
 * player mode manager instance
 *
 * @private
 * @type {PlayerModeManager}
 * @memberof ChatSelector
 */
private playerModeManager: PlayerModeManager

 /**
   * player selector instance
   *
   * @private
   * @type {PlayerSelector}
   * @memberof ChatSelector
   */
  private playerSelector: PlayerSelector

  /**
   * Creates an instance of ChatSelector.
   *
   * @memberof ChatSelector
   */
  public constructor() {
    super('ytd-live-chat-frame')

    this.areaModeManager = new AreaModeManager()
    this.playerModeManager = new PlayerModeManager()
    this.playerSelector = new PlayerSelector()

    this.initialize()
  }

  /**
   * initialize
   *
   * @private
   * @memberof ChatSelector
   */
  private initialize(): void {
    window.onresize = () => {
      this.setHeight()
    }
    this.setAreaMode(AreaMode.LEFT)
    this.setAreaKey()
  }

  /**
   * set player mode class
   *
   * @param playerMode player mode instance
   * @memberof ChatSelector
   */
  public setPlayerMode(playerMode: PlayerMode): void {
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
        this.element.classList.remove(PlayerModeClass.DEFAULT)
        this.element.classList.remove(PlayerModeClass.THEATER)
        this.element.classList.add(PlayerModeClass.FULLSCREEN)
        break
      default:
        break
    }

    this.setHeight()
  }

  /**
   * set area mode class
   *
   * @param areaMode
   * @memberof ChatSelector
   */
  public setAreaMode(areaMode: AreaMode): void {
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
   * set height calculate from player height
   *
   * @memberof ChatSelector
   */
  public setHeight(): void {
    // wait change player mode by SetTimeout
    // TODO: fix it.
    setTimeout(() => {
      let chatHeight = this.playerSelector.height
      if (this.playerModeManager.isFullscreen) {
        chatHeight -= 60
      } else {
        chatHeight -= 45
      }

      const style = `
        max-height: ${chatHeight.toString()}px;
        height: ${chatHeight.toString()}px;
      `
      this.element.setAttribute('style', style)
    }, 500)
  }

  /**
   * set player ondbclick event function
   *
   * @param {() => void} callback
   * @memberof ChatSelector
   */
  public setPlayerOndbclick(callback: () => void): void {
    this.playerSelector.setOndbclick(callback)
  }

  /**
   * set area key event function
   *
   * @private
   * @memberof ChatSelector
   */
  private setAreaKey(): void {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      // keycode of [a]
      if (e.keyCode !== 65) {
        return
      }

      if (this.areaModeManager.isLeft) {
        this.setAreaMode(AreaMode.RIGHT)
      } else if (this.areaModeManager.isRight) {
        this.setAreaMode(AreaMode.LEFT)
      }
    })
  }
}
